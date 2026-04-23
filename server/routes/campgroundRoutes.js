import express from "express";
import { 
    getAllCampgrounds,
    createCampground,
    getCampgroundById,
    deleteCampground
} from "../controllers/campgroundController.js";

const router = express.Router();

router.get("/", getAllCampgrounds);
router.get("/:id", getCampgroundById);
router.post("/", createCampground);
router.delete("/:id", deleteCampground);

export default router;