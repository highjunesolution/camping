import { Router } from "express";
import { listCamping } from "../controllers/camping.controller.js";

const router = Router();
router.get("/list", listCamping);
router.get("/hello", (req, res) => {
  res.send("Hello camping");
});
export default router;
