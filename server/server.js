import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("CampRate backend is running! with nodemon");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});