import { Router } from "express";
import { createProfile } from "../controllers/profile.controller.js";
import { authCheck } from "../middlewares/auth.middleware.js";
const router = Router();

router.use("/create", authCheck, createProfile);

export default router;
