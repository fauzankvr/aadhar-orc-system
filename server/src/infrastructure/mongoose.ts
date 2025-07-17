
import mongoose from 'mongoose';
import { config } from '../config/env'; 

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri, {
      // Removed deprecated options
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

