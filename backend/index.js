const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {PrismaClient} = require("@prisma/client");
const {body, validationResult} = require("express-validator");

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Secret key for JWT
const JWT_SECRET = "supersecretkey";

app.use(express.json()); // For parsing JSON bodies

// Register Route
app.post(
    "/api/register",
    body("email").isEmail(),
    body("password").isLength({min: 6}),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password} = req.body;

        // Check if user already exists
        const userExists = await prisma.user.findUnique({where: {email}});
        if (userExists) {
            return res.status(400).json({message: "User already exists"});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to the database
        const user = await prisma.user.create({
            data: {email, password: hashedPassword},
        });

        res.status(201).json({message: "User registered successfully", user});
    }
);

// Login Route
app.post("/api/login", async (req, res) => {
    const {email, password} = req.body;

    const user = await prisma.user.findUnique({where: {email}});
    if (!user) {
        return res.status(400).json({message: "Invalid credentials"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({message: "Invalid credentials"});
    }

    // Generate a token
    const token = jwt.sign({email}, JWT_SECRET, {expiresIn: "1h"});

    res.json({token});
});

// Protected Route
app.get("/api/protected", async (req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return res.status(401).json({message: "No token provided"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await prisma.user.findUnique({where: {email: decoded.email}});
        res.json({message: "Protected data", user});
    } catch (err) {
        res.status(401).json({message: "Invalid token"});
    }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
