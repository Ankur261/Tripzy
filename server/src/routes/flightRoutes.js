import express from 'express';
import { crateFlight, getAllFlights } from '../controllers/flightController.js';

const router = express.Router();

router.post('/', crateFlight); //add new flight
router.get('/', getAllFlights); //get all flights

export default router;