import Campground from "../models/Campground.js";
import Review from "../models/Review.js";

export async function createReview(req, res) {
    try {
        const campground = await Campground.findById(
            req.params.campgroundId
        );

        if (!campground) {
            return res.status(404).json({
                error: "Campground not found"
            });
        }

        const review = await Review.create({
            ...req.body,
            campground: req.params.campgroundId
        });

        campground.reviews.push(review-_id);
        await campground.save();

        res.status(201).json(review);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

export async function getReviewsByCampground(req, res) {
    try {
        const reviews = await Review.find({
            campground: req.params.campgroundId
        }).populate("campground");

        res.json(reviews);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}