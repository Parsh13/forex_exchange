const express = require('express');
const User = require('../models/User');
const { authenticateToken } = require('./protected'); // Adjusted the path to './protected'

const router = express.Router();

// Rate a user and update their trust score
router.post('/rate/:userId', authenticateToken, async (req, res) => {
  const { rating } = req.body;

  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.ratings.push(rating);
    user.trustScore = user.ratings.reduce((a, b) => a + b) / user.ratings.length;

    await user.save();
    res.json({ success: true, trustScore: user.trustScore });
  } catch (error) {
    res.status(500).json({ error: 'Error rating user' });
  }
});

module.exports = router;
