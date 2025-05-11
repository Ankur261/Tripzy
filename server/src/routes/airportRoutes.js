import express from 'express';
import { createAirport, getAllAirports } from '../controllers/airportController.js';

const router = express.Router();

router.post('/', createAirport); //add a new airport
router.get('/', getAllAirports); //get all airports

export default router;