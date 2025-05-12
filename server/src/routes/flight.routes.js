import express from 'express';
import Flight from '../models/Flight.js'
import shuffle from '../utils/shuffle.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    const shuffled = shuffle(flights);
    res.json(shuffled);
  } catch (error) {                       
    res.status(500).json({ error: 'Failed to fetch airports' });
  }
});

export default router;