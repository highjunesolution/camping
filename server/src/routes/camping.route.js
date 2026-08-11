import { Router } from "express";
import {
  createCamping,
  listCamping,
} from "../controllers/camping.controller.js";
import { authCheck } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/list", listCamping);
router.post("/create", authCheck, createCamping);
export default router;
