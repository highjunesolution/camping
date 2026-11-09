import prisma from "../config/prisma.js";

export const listStats = async (req, res, next) => {
  try {
    const [usersCount, campingsCount, bookingsCount] = await Promise.all([
      prisma.profile.count(),
      prisma.landmark.count(),
      prisma.booking.count({
        where: {
          paymentStatus: true,
        },
      }),
    ]);

    console.log(bookingsCount);
    return res.status(202).json({
      success: true,
      result: {
        usersCount,
        campingsCount,
        bookingsCount,
      },
    });
  } catch (error) {
    next(error);
  }
};
