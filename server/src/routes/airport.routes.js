// routes/airport.routes.js
import express from 'express';
import Airport from '../models/Airport.js';

const router = express.Router();

// GET all airports from database
router.get('/', async (req, res) => {
  console.log("hello")
  try {
    const airports = await Airport.find();
    res.json(airports);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch airports' });
  }
});

export default router;
