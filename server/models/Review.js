import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    campground: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campground",
      required: [true, "Campground reference is required"]
    },
    reviewerName: {
      type: String,
      required: [true, "Reviewer name is required"],
      trim: true
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot be more than 5"]
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      minlength: [5, "Comment must be at least 5 characters"]
    }
  },
  {
    timestamps: true
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;