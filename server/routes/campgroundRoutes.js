import express from "express";
import { getAllCampgrounds } from "../controllers/campgroundController.js";

const router = express.Router();

router.get("/", getAllCampgrounds);

export default router;