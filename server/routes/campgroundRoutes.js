import express from "express";
import { 
    getAllCampgrounds,
    createCampground,
    getCampgroundById,
    deleteCampground,
    updateCampground,
    getTopRatedCampgrounds
} from "../controllers/campgroundController.js";

const router = express.Router();

router.get("/", getAllCampgrounds);
router.get("/top-rated", getTopRatedCampgrounds);
router.get("/:id", getCampgroundById);
router.post("/", createCampground);
router.delete("/:id", deleteCampground);
router.put("/:id", updateCampground);

export default router;