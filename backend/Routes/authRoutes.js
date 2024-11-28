// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// POST /login route for authentication
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy check (replace with real validation)
  if (username === 'admin' && password === 'password') {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid login credentials' });
  }
});

module.exports = router;
