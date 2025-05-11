// models/Flight.js
import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: String,
  logo: String,
  code: String,
  departure: String,
  arrival: String,
  duration: String,
  stops: String,
  economyPrice: Number,
  businessPrice: Number,
});

export default mongoose.model('Flight', flightSchema);
