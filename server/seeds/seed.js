import mongoose from "mongoose";
import dotenv from "dotenv";
import Campground from "../models/Campground.js";
import Review from "../models/Review.js";
import User from "../models/User.js";

dotenv.config();

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to MongoDB")

        await Review.deleteMany();
        await Campground.deleteMany();
        await User.deleteMany();

        console.log("Old data removed");

        const users = await User.create([
            {
                username: "trailhunter",
                email: "trailhunter@example.com"
            },
            {
                username: "forestcamper",
                email: "forest@example.com"
            },
            {
                username: "mountainlover",
                email: "mountain@example.com"
            },
            {
                username: "lakeexplorer",
                email: "lake@example.com"
            },
            {
                username: "wildsweden",
                email: "wild@example.com"
            }    
        ]);

        console.log("Users created");

        const campgrounds = await Campground.create([
        {
            name: "Northern Pines",
            location: "Sweden",
            rating: 5
        },
        {
            name: "Lakeview Camp",
            location: "Norway",
            rating: 4
        },
        {
            name: "Mountain Base",
            location: "Finland",
            rating: 5
        },
        {
            name: "Forest Escape",
            location: "Denmark",
            rating: 3
        },
        {
            name: "Midnight Sun Camp",
            location: "Iceland",
            rating: 5
        }
        ]);

        console.log("Campgrounds created");

        const reviews = await Review.create([
        {
            campground: campgrounds[0]._id,
            reviewerName: users[0].username,
            rating: 5,
            comment: "Amazing nature and peaceful atmosphere."
        },
        {
            campground: campgrounds[1]._id,
            reviewerName: users[1].username,
            rating: 4,
            comment: "Beautiful lake and clean camping area."
        },
        {
            campground: campgrounds[2]._id,
            reviewerName: users[2].username,
            rating: 5,
            comment: "Perfect hiking trails nearby."
        },
        {
            campground: campgrounds[3]._id,
            reviewerName: users[3].username,
            rating: 3,
            comment: "Good campground but a bit crowded."
        },
        {
            campground: campgrounds[4]._id,
            reviewerName: users[4].username,
            rating: 5,
            comment: "One of the best camping experiences ever."
        }
        ]);
        
        console.log("Reviews created");

        for (let i = 0; i < reviews.length; i++) {
            campgrounds[i].reviews.push(reviews[i]._id);
            await campgrounds[i].save();
        }

        console.log("Reviews connected to campgrounds");

        mongoose.connection.close();

        console.log("Database seeded successfully");
    } catch (error) {
        console.error(error);
    }
}

seedDatabase();