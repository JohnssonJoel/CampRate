function CampgroundCard({ campground }) {
    return (
        <div>
            <h2>{campground.name}</h2>
            <p>Location: {campground.location}</p>
            <p>Rating: {campground.rating}</p>
        </div>
    );
}

export default CampgroundCard;