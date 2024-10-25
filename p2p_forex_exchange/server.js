require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // MongoDB connection

// Import route handlers
const userRoutes = require('./routes/user');
const ratingRoutes = require('./routes/rating');
const matchRoutes = require('./routes/match');
const { router: protectedRoutes } = require('./routes/protected'); // Import protected routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Public routes for user registration and login
app.use('/api/users', userRoutes);

// Protected routes (require JWT authentication)
app.use('/api/ratings', ratingRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/protected', protectedRoutes); // Using protected routes

const geolocationRoutes = require('./routes/geolocation');


app.use('/api/geolocation', geolocationRoutes);

// Root route for API access
app.get('/', (req, res) => {
  res.send('Welcome to the P2P Foreign Exchange API! Use /api/users, /api/ratings, or /api/matches for other actions.');
});

// Start server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
