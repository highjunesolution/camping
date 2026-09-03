import { Router } from "express";
import { authCheck } from "../middlewares/auth.middleware.js";
import { checkOut, createBooking } from "../controllers/booking.controller.js";
const router = Router();

router.post("/create", authCheck, createBooking);

router.post("/checkout", authCheck, checkOut)

export default router;
