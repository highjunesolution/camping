import { renderError } from "../utils/renderError.util.js";

export const createProfile = async (req, res, next) => {
  try {
    
    if(true) {
      return renderError(400, "Password invalid")
    }
    console.log("Hello Create Profile");
    res.json({ message: "Hello Create Profile" });
  } catch (error) {
    next(error)
  }
};
