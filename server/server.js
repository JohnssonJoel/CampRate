import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import campgroundRoutes from "./routes/campgroundRoutes.js";
import cennectDB from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("CampRate backend is running!");
});

app.use("/api/campgrounds", campgroundRoutes);
app.use("/api/campgrounds/:campgroundId/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

cennectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});