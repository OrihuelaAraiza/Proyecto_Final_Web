const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Adjust path as needed
const prisma = require('./prisma/prismaClient'); // Prisma client

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
