import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://ankuragrawal911:D8HOlsiNxsxmpds7@cluster0.3dnsckp.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log('Connected to MongoDB using Mongoose');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
