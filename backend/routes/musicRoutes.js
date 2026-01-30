const express = require('express');
const router = express.Router();
const { getMusicByMood } = require('../controllers/musicController');
const { protect } = require('../middleware/authMiddleware');

// All music routes require auth
router.get('/:mood', protect, getMusicByMood);

module.exports = router;
