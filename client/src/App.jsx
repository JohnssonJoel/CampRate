import { useEffect, useState } from "react";
import "./App.css";
import CampgroundCard from "./components/CampgroundCard";
import CampgroundForm from "./components/CampgroundForm";

function App() {
  const [campgrounds, setCampgrounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCampgrounds() {
      try {
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

    fetchCampgrounds();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  function handleCampgroundCreated(newCampground) {
    setCampgrounds((currentCampgrounds) => [
      ...currentCampgrounds,
      newCampground
    ]);
  }

  return (
    <div>
      <h1>CampRate</h1>

      <CampgroundForm onCampgroundCreated={handleCampgroundCreated} />

      {campgrounds.map((campground) => (
        <CampgroundCard
        key={campground._id}
        campground={campground}
        />
      ))}
    </div>
  );
}

export default App;