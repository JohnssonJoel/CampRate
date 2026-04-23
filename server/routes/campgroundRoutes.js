import express from "express";
import { 
    getAllCampgrounds,
    createCampground,
    getCampgroundById
} from "../controllers/campgroundController.js";

const router = express.Router();

router.get("/", getAllCampgrounds);
router.get("/:id", getCampgroundById);
router.post("/", createCampground);

export default router;