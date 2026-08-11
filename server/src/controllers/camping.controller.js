import prisma from "../config/prisma.js";

export const listCamping = async (req, res) => {
  res.send("Hello Controller");
  console.log("Hello Controller");
};

export const createCamping = async (req, res) => {
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
