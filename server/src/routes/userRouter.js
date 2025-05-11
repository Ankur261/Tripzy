// routes/userRoutes.js
import express from 'express';
import { signup, getProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.get('/profile/:id', getProfile);

export default router;
