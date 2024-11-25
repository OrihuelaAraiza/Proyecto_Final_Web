// backend/index.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Example API Route
app.get('/api/data', (req, res) => {
    res.json({message: 'Hello from the backend!'});
});

// Start Server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
