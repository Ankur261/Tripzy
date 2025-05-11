// models/Flight.js
import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: String,
  flightNumber: String,
  from: String,
  to: String,
  departureTime: Date,
  arrivalTime: Date,
  price: Number
});

export default mongoose.model('Flight', flightSchema);
