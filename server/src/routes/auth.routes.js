import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || 'f92dea929ffa49b1fbc92cb13af461db00e8abd5f89229e406f61338562e1b8c';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

// Helper function to generate token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

// Email check route (unchanged)
router.post('/check', async (req, res) => {
  console.log(req.body)
  const { email } = req.body;
  const user = await User.findOne({ email });
  res.json({ exists: !!user });
});

// Login route with JWT
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = generateToken(user);
    
    // Omit password from response
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;
    
    res.json({
      user: userWithoutPassword,
      token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Register route with password hashing
router.post('/register', async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user with hashed password
    const newUser = new User({
      ...rest,
      password: hashedPassword
    });
    
    await newUser.save();
    
    // Generate token
    const token = generateToken(newUser);
    
    // Omit password from response
    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;
    
    res.status(201).json({
      user: userWithoutPassword,
      token
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
});

export default router;