import { Router } from "express";
import campingRoute from "./camping.route.js";
import profileRoute from "./profile.route.js";
import cloudinaryRoute from "./cloudinary.route.js";
import bookingRoute from "./booking.route.js"
const router = Router();

router.use("/camping", campingRoute);
router.use("/profile", profileRoute);
router.use("/image", cloudinaryRoute);
router.use("/booking", bookingRoute)

export default router;
