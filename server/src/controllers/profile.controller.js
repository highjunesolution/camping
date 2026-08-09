import { renderError } from "../utils/renderError.util.js";

export const createProfile = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;


    console.log(req.user)
    
    
    res.json(req.body);
  } catch (error) {
    next(error);
  }
};
