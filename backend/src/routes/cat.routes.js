import express from "express";
import { getCats, createCat, updateCat, deleteCat } from "../controllers/cat.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getCats);

router.post("/", authMiddleware, createCat);
router.put("/:id", authMiddleware, updateCat);
router.delete("/:id", authMiddleware, deleteCat);

export default router;
