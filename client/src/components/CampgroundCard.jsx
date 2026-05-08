import { useState} from "react";

function CampgroundCard({ campground, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(campground.name);
    const [location, setLocation] = useState(campground.location);
    const [rating, setRating] = useState(campground.rating);

    async function handleSave() {
        const updateCampground = {
            name,
            location,
            rating: Number(rating)
        };

        await onUpdate(campground._id, updateCampground);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div>
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
        )
    } 
    return (
        <div>
            <h2>{campground.name}</h2>
            <p>Location: {campground.location}</p>
            <p>Rating: {campground.rating}</p>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(campground._id)}>Delete</button>
        </div>
    );
}

export default CampgroundCard;