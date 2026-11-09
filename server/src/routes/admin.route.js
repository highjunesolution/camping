import { Router } from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { listStats } from "../controllers/admin.controller.js";

const router = Router();
router.get("/stats", authCheck, listStats)


export default router;