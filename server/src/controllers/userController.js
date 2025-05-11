// controllers/userController.js
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

// Signup controller
export const signup = async (req, res) => {
  const { name, email, password, age, gender } = req.body;
  try {
   // const existingUser = await User.findOne({ email });
   // if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, age, gender });
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user profile
export const getProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
