const express = require('express');
const User = require('../models/User');
const geolib = require('geolib');
const { authenticateToken } = require('./protected'); // Adjusted the path to './protected'

const router = express.Router();

// Get users within a specific radius
router.get('/find_matches', authenticateToken, async (req, res) => {
  const { lat, lon, radius } = req.query;

  try {
    const users = await User.find();
    const matches = users.filter(user => {
      const distance = geolib.getDistance(
        { latitude: lat, longitude: lon },
        { latitude: user.location.latitude, longitude: user.location.longitude }
      );
      return distance <= radius;
    });

    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: 'Error finding matches' });
  }
});

module.exports = router;
