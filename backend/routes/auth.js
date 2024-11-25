const express = require("express");
const bcrypt = require("bcryptjs"); // Already replaced with bcryptjs
const jwt = require("jsonwebtoken");
const {body, validationResult} = require("express-validator");
const prisma = require("../prisma/prismaClient"); // Adjust the import path as needed

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Middleware for authenticating users
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from the Authorization header
    if (!token) {
        return res.status(401).json({message: "Unauthorized: No token provided"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({message: "Unauthorized: Invalid token"});
    }
};

// User Registration
router.post(
    '/register',
    [
        body('email').isEmail(),
        body('password').isLength({min: 6}),
        body('name').notEmpty(), // Validate the name field
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password, name} = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name, // Include the name field
                },
            });
            res.status(201).json({message: 'User registered successfully', user});
        } catch (error) {
            if (error.code === 'P2002') { // Prisma unique constraint violation
                res.status(400).json({message: 'Email already exists'});
            } else {
                res.status(500).json({message: 'Internal server error', error});
            }
        }
    }
);

// User Login
router.post(
    "/login",
    [
        body("email").isEmail(),
        body("password").notEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password} = req.body;

        try {
            const user = await prisma.user.findUnique({
                where: {email},
            });

            if (!user) {
                return res.status(404).json({message: "User not found"});
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({message: "Invalid credentials"});
            }

            const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: "1h"});
            res.status(200).json({message: "Login successful", token});
        } catch (error) {
            res.status(500).json({message: "Internal server error", error});
        }
    }
);

// Token Verification (optional, for protected routes)
router.get("/verify", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({message: "No token provided"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.status(200).json({message: "Token is valid", decoded});
    } catch (error) {
        res.status(401).json({message: "Invalid or expired token", error});
    }
});

// User Profile Route (protected)
router.get("/profile", authenticate, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {id: req.user.id}, // Use the authenticated user's ID
            select: {
                id: true,
                email: true,
                name: true, // Add any other fields you'd like to return
            },
        });

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;
