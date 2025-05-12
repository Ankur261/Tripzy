// models/Airport.js
import mongoose from 'mongoose';

const airportSchema = new mongoose.Schema({
  name: String,
  city: String,
  code: { type: String, unique: true },
});

export default mongoose.model('Airport', airportSchema);
