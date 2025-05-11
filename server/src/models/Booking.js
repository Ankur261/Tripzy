import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flight: Object,
  travellerInfo: Array,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Booking', bookingSchema);