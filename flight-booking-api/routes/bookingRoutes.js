import express from 'express';
import { bookFlight, getUserBookings } from '../controllers/bookingController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, bookFlight);
router.get('/', authMiddleware, getUserBookings);

export default router;
