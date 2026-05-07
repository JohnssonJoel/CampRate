import { useState } from "react";

function CampgroundForm({ onCampgroundCreated }) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const newCampground = {
            name,
            location,
            rating: Number(rating)
        };

        const response = await fetch("http://localhost:5000/api/campgrounds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCampground)
        });

        const data = await response.json();

        onCampgroundCreated(data);

        setName("");
        setLocation("");
        setRating("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add campground</h2>

            <input
                type="text"
                placeholder="Campground name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
            />

            <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    );
}

export default CampgroundForm;