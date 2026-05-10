import { useEffect, useState } from "react";
import "./App.css";
import CampgroundCard from "./components/CampgroundCard";
import CampgroundForm from "./components/CampgroundForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [campgrounds, setCampgrounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchCampgrounds() {
    try {
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/campgrounds"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch campgrounds");
      }

      const data = await response.json();

      setCampgrounds(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCampgrounds();

    const intervalId = setInterval(() => {
      fetchCampgrounds();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleCampgroundCreated(newCampground) {
    setCampgrounds((currentCampgrounds) => [
      ...currentCampgrounds,
      newCampground
    ]);
  }

  async function handleDeleteCampground(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this campground?"
    );

    if (!confirmed) {
      return;
    }

    const response = await fetch(
      `http://localhost:5000/api/campgrounds/${id}`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      setCampgrounds((currentCampgrounds) =>
        currentCampgrounds.filter(
          (campground) => campground._id !== id
        )
      );
    }
  }

  async function handleUpdateCampground(id, updatedCampground) {
    const response = await fetch(
      `http://localhost:5000/api/campgrounds/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCampground)
      }
    );

    const data = await response.json();

    if (response.ok) {
      setCampgrounds((currentCampgrounds) =>
        currentCampgrounds.map((campground) =>
          campground._id === id ? data : campground
        )
      );
    }
  }

  const filteredCampgrounds = campgrounds.filter((
    campground) =>
      campground.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) || 
      campground.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="app">
      <h1>CampRate</h1>

      <input 
        type="text"
        placeholder="Search by name or location..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        />

      <CampgroundForm
        onCampgroundCreated={handleCampgroundCreated}
      />

      <div className="campground-list">
        {filteredCampgrounds.map((campground) => (
          <CampgroundCard
            key={campground._id}
            campground={campground}
            onDelete={handleDeleteCampground}
            onUpdate={handleUpdateCampground}
          />
        ))}
      </div>
    </div>
  );
}

export default App;