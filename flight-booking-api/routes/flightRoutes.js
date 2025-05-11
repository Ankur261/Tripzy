import express from 'express';
import { addFlight, getAllFlights } from '../controllers/flightController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', addFlight);
router.get('/', getAllFlights);

export default router;
