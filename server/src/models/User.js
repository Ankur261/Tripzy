import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only if registered
  name: String,
});

export default mongoose.model('User', userSchema);