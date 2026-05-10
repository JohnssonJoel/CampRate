import { useState } from "react";

function ReviewForm({ campgroundId, onReviewCreated }) {
    const [reviewerName, setReviewerName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setError("");

            const response = await fetch(
                `http://localhost:5000/api/campgrounds/${campgroundId}/reviews`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        reviewerName,
                        rating: Number(rating),
                        comment
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to create review");
            }

            onReviewCreated(data);

            setReviewerName("");
            setRating(5);
            setComment("");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h4>Add review</h4>

            {error && <p>{error}</p>}

            <input
             type="text"
             placeholder="Your name"
             value={reviewerName}
             onChange={(event) => setReviewerName(event.target.value)}
             />

             <input 
             type="number"
             min="1"
             max="5"
             value={rating}
             onChange={(event) => setRating(event.target.value)}
             />

             <textarea 
             placeholder="Write your review..."
             value={comment}
             onChange={(event) => setComment(event.target.value)}/>

             <button type="submit">Add review</button>
        </form>
    );
}

export default ReviewForm;