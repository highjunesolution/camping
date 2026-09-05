import prisma from "../config/prisma.js";
import { calTotal } from "../utils/booking.util.js";
import { renderError } from "../utils/renderError.util.js";
import stripe from "../config/stripe.config.js";

export const createBooking = async (req, res, next) => {
  try {
    // overview
    // step 1 destructoring req.body
    // step 2 delete booking
    // step 3 find camping
    // step 4 calculate total
    // step 5 insert to db
    // step 6 send id booking to react

    // step 1 destructoring req.body
    const { campingId, checkIn, checkOut } = req.body;
    const { id } = req.user;

    // step 2 delete booking
    await prisma.booking.deleteMany({
      where: {
        profileId: id,
        paymentStatus: false,
      },
    });

    // step 3 find camping
    const camping = await prisma.landmark.findFirst({
      where: {
        id: campingId,
      },
      select: {
        price: true,
      },
    });
    console.log(camping.price);
    if (!camping) return renderError(400, "Camping not found");

    // step 4 calculate total
    const { total, totalNights } = calTotal(checkIn, checkOut, camping.price);

    // step 5 insert to db
    const result = await prisma.booking.create({
      data: {
        checkIn,
        checkOut,
        total,
        totalNights,
        landmarkId: campingId,
        profileId: id,
      },
    });

    // step 6 send id booking to react
    res.status(200).json({
      success: true,
      result: result.id,
    });
  } catch (error) {
    next(error);
  }
};

export const checkOut = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log(id);

    // Step 1 find booking
    const booking = await prisma.booking.findFirst({
      where: { id: Number(id) },
      include: {
        landmark: {
          select: {
            id: true,
            title: true,
            secure_url: true,
          },
        },
      },
    });

    if (!booking) {
      return renderError(404, "Not found camping!!");
    }

    const {
      total,
      totalNights,
      checkIn,
      checkOut,
      landmark: { title, secure_url },
    } = booking;

    // console.log(total, totalNights, checkIn, checkOut, title, secure_url)
    // Step 2 Stripe
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      metadata: { bookingId: booking.id },
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          quantity: 1,
          price_data: {
            currency: "thb",
            product_data: {
                name: title,
                images: [secure_url],
                description: "Thank you so much"
            },
            unit_amount: total * 100
          },
          
        },
      ],
      mode: "payment",
      return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    next(error);
  }
};

export const checkOutStatus = async (req, res, next) => {
  try {
    const { session_id } = req.params
    const session = await stripe.checkout.sessions.retrieve(session_id)
    const bookingId = session.metadata?.bookingId
    if(session.status !== 'complete' || !bookingId) return renderError(400, "Something wrong")
     
     console.log(session) 

     await prisma.booking.update({
      where: {
        id: Number(bookingId),
      },
      data: {
        paymentStatus: true
      }
     })

     return res.status(200).json({
      success: true,
      status: session.status,
     })
  } catch (error) {
    next(error)
  }
}