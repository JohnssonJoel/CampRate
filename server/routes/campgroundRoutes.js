import express from "express";
import { 
    getAllCampgrounds,
    createCampground
} from "../controllers/campgroundController.js";

const router = express.Router();

router.get("/", getAllCampgrounds);
router.post("/", createCampground);

export default router;