const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware for token authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get token from header
  if (!token) return res.sendStatus(401); // No token, unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token invalid, forbidden
    req.user = user; // Store user information in request
    next(); // Proceed to the next middleware/route handler
  });
};

// Create a new router instance
const router = express.Router();

// Protected route to test middleware
router.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
});

// Export the router and the middleware
module.exports = {
  authenticateToken,
  router, // Exporting the router
};
