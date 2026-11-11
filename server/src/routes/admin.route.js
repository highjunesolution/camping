import { Router } from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { listAllReservations, listMyCampings, listReservations, listStats } from "../controllers/admin.controller.js";

const router = Router();
router.get("/stats", authCheck, listStats);
router.get("/reservations", authCheck, listReservations)
router.get("/all-reservations", authCheck, listAllReservations)
router.get("/my-campings", authCheck, listMyCampings)


export default router;