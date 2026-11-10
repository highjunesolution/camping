import { Router } from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { listAllReservations, listReservations, listStats } from "../controllers/admin.controller.js";

const router = Router();
router.get("/stats", authCheck, listStats);
router.get("/reservations", authCheck, listReservations)
router.get("/all-reservations", authCheck, listAllReservations)


export default router;