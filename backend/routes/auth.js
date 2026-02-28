const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (user && (await user.matchPassword(password))) {
      res.json({
        id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Register a new admin 
// @route   POST /api/auth/register
// @access  Public
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await User.findOne({ where: { username } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ username, password });

    res.status(201).json({
      id: user.id,
      username: user.username,
      token: generateToken(user.id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
