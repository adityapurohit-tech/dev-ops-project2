const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // If credentials are correct
    return res.status(200).json({ message: 'Login successful', redirectUrl: '/welcome' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
