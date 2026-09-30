import prisma from "../config/prisma.js";

export const listCamping = async (req, res, next) => {
  try {

    const { id } = req.params
    console.log(id)
    const campings = await prisma.landmark.findMany({
      include: {
        favorites: {
          where: { profileId: id },
          select: { id: true },
        },
      },
    });
    const campingWithLike = campings.map((item) => ({
      ...item,
      isFavorite: item.favorites.length > 0,
    }));
    // console.log(campingWithLike);
    res.json({
      success: true,
      result: campingWithLike,
    });
  } catch (error) {
    next(error);
  }
};

export const createCamping = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, price, description, category, lat, lng, image } = req.body;
    const camping = await prisma.landmark.create({
      data: {
        profileId: id,
        title,
        price,
        secure_url: image.secure_url,
        public_id: image.public_id,
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
    const { campingId } = req.params;
    const camping = await prisma.landmark.findFirst({
      where: {
        id: Number(campingId),
      },
    });

    return res.json({
      success: true,
      result: camping,
    });
  } catch (error) {
    next(error);
  }
};

export const actionFavorite = async (req, res, next) => {
  try {
    const { campingId, isFavorite } = req.body
    const { id } = req.user

    // Add or Remove
    let result
    if(isFavorite) {
      result = await prisma.favorite.deleteMany({
        where: {
          profileId: id,
          landmarkId: Number(campingId),
        }
      })
    } else {
      result = await prisma.favorite.create({
        data: {
          profileId: id,
          landmarkId: campingId
        }
      })
    }
    return res.status(200).json({
      success: true,
      result,
      message: isFavorite ? "Remove Favorite" : "Add Favorite"
    })
  } catch (error) {
    next(error)
  }
}

export const listFavorites = async (req, res, next) => {
  try {
    const { id } = req.user
    const favorites = await prisma.favorite.findMany({
      where: {
        profileId: id
      },
      include: { landmark: true }
    });
    
    const favoriteWithLike = favorites.map((item)=>{
      return {
        ...item,
        landmark: {
          ...item.landmark,
          isFavorite: true
        }
      }
    })
    
    return res.status(200).json({
      success: true,
      result: favoriteWithLike,
    })
  } catch (error) {
    next(error)
  }
}