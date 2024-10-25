const express = require('express');
const axios = require('axios');
const router = express.Router();

// Route to get geolocation based on IP address
router.get('/ipapi/:ip', async (req, res) => {
    const { ip } = req.params;
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve geolocation data' });
    }
});

module.exports = router;
