import { Router } from "express";
import { authCheck } from "../middlewares/auth.middleware.js";
import { createBooking } from "../controllers/booking.controller.js";
const router = Router();

router.post("/create", authCheck, createBooking);

export default router;
