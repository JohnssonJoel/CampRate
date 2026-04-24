import express from "express";
import {
    createReview,
    getReviewsByCampground
} from "../controllers/reviewController.js";

const router = express.Router({ mergeParams: true });

router.get("/", getReviewsByCampground);
router.post("/", createReview);

export default router;