import Campground from "../models/Campground.js";

export async function getAllCampgrounds(req, res) {
    try {
        const campgrounds = await Campground.find();

        res.json(campgrounds);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch campgrounds"
        });
    }
}

export async function createCampground(req, res) {
    try {
        const newCampground = await Campground.create(req.body);

        res.status(201).json(newCampground);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

export function getCampgroundById(req, res) {
    const id = Number(req.params.id);

    const campground = campgrounds.find(
        (campground) => campground.id === id
    );

    if (!campground) {
        return res.status(404).json({
            error: "Campground not found"
        });
    }

    res.json(campground);
}

export function deleteCampground(req, res) {
    const id = Number(req.params.id);

    const campgroundExists = campgrounds.find(
        (campground) => campground.id === id
    );

    if (!campgroundExists) {
        return res.status(404).json({
            error: "Campground not found"
        });
    }

    campgrounds = campgrounds.filter(
        (campground) => campground.id !== id
    );

    res.status(204).send();
}

export function updateCampground(req, res) {
    const id = Number(req.params.id);
    const { name, location, rating } = req.body;

    const campground = campgrounds.find(
        (campground) => campground.id === id
    );

    if (!campground) {
        return res.status(404).json({
            error: "Campground not found"
        });
    }

    if (!name || !location || rating === undefined) {
        return res.status(400).json({
            error: "name, location and rating are required"
        });
    }

    if (typeof rating !== "number") {
        return res.status(400).json({
            error: "rating must be a number"
        });
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({
            error: "rating must be between 1 and 5"
        });
    }

    campground.name = name;
    campground.location = location;
    campground.rating = rating;

    res.json(campground);
}


