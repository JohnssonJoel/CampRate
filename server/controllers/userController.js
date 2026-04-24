import User from "../models/User.js";

export async function createUser(req, res) {
    try {
        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

export async function getAllUsers(req, res) {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch users"
        });
    }
}