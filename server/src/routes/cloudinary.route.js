import { Router } from "express";
import { authCheck } from "../middlewares/auth.middleware.js";
import { createImage } from "../controllers/cloudinary.controller.js";
const router = Router();

router.post("/upload", authCheck, createImage)

export default router