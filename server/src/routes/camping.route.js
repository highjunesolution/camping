import { Router } from "express";
import {
  actionFavorite,
  createCamping,
  listCamping,
  singleCamping,
} from "../controllers/camping.controller.js";
import { authCheck } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/list/:id", listCamping);
router.post("/create", authCheck, createCamping);
router.get("/:campingId", singleCamping);
router.post("/favorite", authCheck, actionFavorite);
export default router;
