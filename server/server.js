import express from "express";
import campgroundRoutes from "./routes/campgroundRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("CampRate backend is running!");
});

app.use("/api/campgrounds", campgroundRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});