import { Router } from "express";
import { authCheck } from "../middlewares/auth.middleware.js";
import { checkOut, checkOutStatus, createBooking } from "../controllers/booking.controller.js";
const router = Router();

router.post("/create", authCheck, createBooking);

router.post("/checkout", authCheck, checkOut)
router.get("/checkout-status/:session_id", authCheck, checkOutStatus)

export default router;
