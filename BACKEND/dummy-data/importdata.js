import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Laptop } from '../model/laptopModel.js';
import fs from 'fs';

console.log('hi');

dotenv.config({ path: './config.env' });

const laptops = JSON.parse(
  fs.readFileSync('./dummy-data/laptop_products.json', 'utf-8'),
);

const password = process.env.DB_PASSWORD;
const database = process.env.MONGO_URL.replace('<DB_PASSWORD>', password);

await mongoose.connect(database, { dbName: 'PRODUCT' });

async function importProducts() {
  try {
    await Laptop.create(laptops);
    console.log('Data sent to DB!');
  } catch (err) {
    console.log("Cannot import data into DB -_-'");
  }
  process.exit();
}

if (process.argv[2] === '--import') {
  importProducts();
  console.log('DATA PUSHED');
}
