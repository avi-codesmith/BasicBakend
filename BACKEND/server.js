import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
import mongoose from 'mongoose';
import { app } from './app.js';

const port = process.env.PORT || 3000;

const password = process.env.DB_PASSWORD;
const database = process.env.MONGO_URL.replace('<DB_PASSWORD>', password);

(async function () {
  try {
    await mongoose.connect(database, { dbName: 'PRODUCT' });
    console.log('DB connection successful!');
  } catch (err) {
    console.log('Cannot connect with database -_-');
  }
})(); //IIFE

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
