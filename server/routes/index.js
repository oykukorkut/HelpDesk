const express = require('express');
const router = express.Router();

// Ana route
router.get('/', (req, res) => {
  res.json({ message: 'Help Desk API Routes' });
});

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Help Desk API çalışıyor!' });
});

module.exports = router; 