import Campground from "../models/Campground.js";

export async function getAllCampgrounds(req, res) {
    try {
        const filter = {};

        if (req.query.location) {
            filter.location = req.query.location;
        }

        const campgrounds = await Campground.find(filter).populate("reviews");

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

export async function getCampgroundById(req, res) {
    try {
        const campground = await Campground.findById(req.params.id).populate("reviews");

        if (!campground) {
            return res.status(404).json({
                error: "Campground not found"
            });
        }
        
        res.json(campground);
    } catch (error) {
        return res.status(400).json({
            error: "Invalid campground id"
        });
    }
}

export async function deleteCampground(req, res) {
    try {
        const deleteCampground = await Campground.findByIdAndDelete(
            req.params.id
        );

        if (!deleteCampground) {
            return res.status(404).json({
                error: "Campground not found"
            });
        }

        res.status(204).send();
    } catch (error) {
        return res.status(400).json({
            error: "Inavalid campground id"
        });
    }
}

export async function updateCampground(req, res) {
    try {
        const updateCampground = await Campground.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.json(updateCampground);
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
}

export async function getTopRatedCampgrounds(req, res) {
    try {
        const campgrounds = await Campground.find()
            .sort({ rating: -1 })
            .limit(5);

        res.json(campgrounds);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch top rated campgrounds"
        });
    }
}