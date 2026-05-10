import { useState } from "react";
import ReviewForm from "./ReviewForm";

function CampgroundCard({ campground, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(campground.name);
  const [location, setLocation] = useState(campground.location);
  const [rating, setRating] = useState(campground.rating);
  const [reviews, setReviews] = useState(campground.reviews || []);

  async function handleSave() {
    const updatedCampground = {
      name,
      location,
      rating: Number(rating)
    };

    await onUpdate(campground._id, updatedCampground);
    setIsEditing(false);
  }

  function handleReviewCreated(newReview) {
    setReviews((currentReviews) => [
        ...currentReviews,
        newReview
    ]);
  }

  if (isEditing) {
    return (
      <div className="campground-card">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <input
          type="number"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />

        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="campground-card">
      <h2>{campground.name}</h2>
      <p>Location: {campground.location}</p>
      <p>Rating: {campground.rating}</p>

      <h3>Reviews</h3>

      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="review">
            <p>{review.comment}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      <ReviewForm
        campground={campground._id}
        onReviewCreated={handleReviewCreated}
      />

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(campground._id)}>Delete</button>
    </div>
  );
}

export default CampgroundCard;