import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('mongodb connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at port ${PORT}`);
});
