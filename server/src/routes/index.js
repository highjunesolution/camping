import { Router } from "express";
import campingRoute from "./camping.route.js"
import profileRoute from "./profile.route.js"
const router = Router();

router.use("/camping", campingRoute)
router.use("/profile", profileRoute)

export default router;
