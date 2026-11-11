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
          landmark: {
            profileId: id,
          },
          paymentStatus: true,
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

export const listAllReservations = async (req, res, next) => {
  try {
    const { id } = req.user;
    const reservations = await prisma.booking.findMany({
      where: {
        paymentStatus: true,
        landmark: {
          profileId: id,
        },
      },
      include: {
        landmark: {
          select: {
            id: true,
            title: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json({
      success: true,
      result: reservations,
    });
  } catch (error) {
    next(error);
  }
};

export const listMyCampings = async (req, res, next) => {
  try {
    const { id } = req.user;
    const campings = await prisma.landmark.findMany({
      where: { profileId: id },
      select: {
        id: true,
        title: true,
        price: true,
      },
    });
    res.status(200).json({
      success: true,
      result: campings
    });
  } catch (error) {
    next(error);
  }
};
