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

export const listReservations = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    // 1. count campings
    // 2. count nights
    // 3. total prices
    const [campings, totals] = await Promise.all([
      prisma.landmark.count({
        where: {
          profileId: id,
        },
      }),
      prisma.booking.aggregate({
        where: {
          profileId: id,
        },
        _sum: {
          totalNights: true,
          total: true,
        },
      }),
    ]);

    res.status(200).json({
      success: true,
      result: {
        campings,
        ...totals._sum,
      },
    });
  } catch (error) {
    next(error);
  }
};
