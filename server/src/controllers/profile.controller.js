import prisma from "../config/prisma.js";
import { renderError } from "../utils/renderError.util.js";

export const createProfile = async (req, res, next) => {
  try {
    console.clear();
    const { firstName, lastName } = req.body;
    const { id } = req.user;
    const email = req.user.emailAddresses[0].emailAddress;

    const profile = await prisma.profile.upsert({
      where: {
        clerkId: id,
      },
      create: {
        clerkId: id,
        firstName,
        lastName,
        email,
      },
      update: {
        firstName,
        lastName,
        email,
      },
    });

    return res.status(200).json({
      success: true,
      message: "New profile is created successfully!!",
      result: profile,
    });
  } catch (error) {
    next(error);
  }
};
