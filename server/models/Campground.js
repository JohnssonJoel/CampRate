import mongoose from "mongoose";

const campgroundSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Campground name is required"],
            trim: true 
        },
        location: {
            type: String,
            required: [true, "Location is required"],
            trim: true
        },
        rating: {
            type: Number,
            required: [true, "Rating is required"],
            min: [1, "Rating mus be at least 1"],
            max: [5, "Rating cannot be more than 5"]
        },
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review"
            }
        ]
    },
    {
        timestamps: true
    }
);

const Campground = mongoose.model("Campground", campgroundSchema);

export default Campground;