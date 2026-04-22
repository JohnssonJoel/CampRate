import express from "express";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("CampRate backend is running!");
});

// API route
app.get("/api/campgrounds", (req, res) => {
    const campgrounds = [
        {
            id: 1,
            name: "Åhus Camping",
            location: "Åhus",
            rating: 4.5
        },
        {
            id: 2,
            name: "Böda Sand",
            location: "Öland",
            rating: 4.9
        },
        {
            id: 3,
            name: "Kronocamping Saxnäs",
            location: "Öland",
            rating: 4.4
        }
    ];

    res.json(campgrounds);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});