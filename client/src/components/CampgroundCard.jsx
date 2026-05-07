function CampgroundCard({ campground, onDelete }) {
    return (
        <div>
            <h2>{campground.name}</h2>
            <p>Location: {campground.location}</p>
            <p>Rating: {campground.rating}</p>

            <button onClick={() => onDelete(campground._id)}>
                Delete
            </button>
        </div>
    );
}

export default CampgroundCard;