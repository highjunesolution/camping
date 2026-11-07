import { Router } from "express";
import {
  actionFavorite,
  createCamping,
  listCamping,
  singleCamping,
  listFavorites,
  filterCamping
} from "../controllers/camping.controller.js";
import { authCheck } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/list/:id", listCamping);
router.post("/create", authCheck, createCamping);
router.post("/favorite", authCheck, actionFavorite);
router.get("/favorites", authCheck, listFavorites);
router.get("/filter", filterCamping)
router.get("/:campingId", singleCamping);
export default router;
