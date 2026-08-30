import prisma from "../config/prisma.js"
import { calTotal } from "../utils/booking.util.js";
import { renderError } from "../utils/renderError.util.js";

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
        const { campingId, checkIn, checkOut } = req.body
        const { id } = req.user
        
        // step 2 delete booking
        await prisma.booking.deleteMany({
            where: {
                profileId: id,
                paymentStatus: false,
            }
        });


        // step 3 find camping
        const camping = await prisma.landmark.findFirst({
            where:{
                id: campingId
            },
            select: {
                price: true
            }
        })
        console.log(camping.price)
        if(!camping) return renderError(400, "Camping not found")

        // step 4 calculate total
        const { total, totalNights } = calTotal(checkIn, checkOut, camping.price)

        // step 5 insert to db
        const result = await prisma.booking.create({
            data: {
                checkIn,
                checkOut,
                total,
                totalNights,
                landmarkId: campingId,
                profileId: id
            }
        })


        // step 6 send id booking to react
        res.status(200).json({
            success: true,
            result: result.id
        })

    } catch (error) {
        next(error)
    }
}