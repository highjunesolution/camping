import prisma from "../config/prisma.js";

export const listCamping = async (req, res, next) => {
  try {
    const campings = await prisma.landmark.findMany();
    res.json({
      success: true,
      result: campings,
    });
  } catch (error) {
    next(error);
  }
};

export const createCamping = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, price, description, category, lat, lng } = req.body;

    const camping = await prisma.landmark.create({
      data: {
        profileId: id,
        title,
        price,
        description,
        category,
        lat,
        lng,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Create camping successfully",
      camping,
    });
  } catch (error) {
    next(error);
  }
};

export const singleCamping = async (req, res, next) => {
  try {
    const { campingId } = req.params
    const camping = await prisma.landmark.findFirst({
      where: {
        id: Number(campingId)
      }
    })

    return res.json({
      success: true,
      result: camping
    })
  } catch (error) {
    next(error);
  }
};
