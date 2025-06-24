//DATABASE CONECTION
const mongoose = require("mongoose");
require('dotenv').config();

const mongoUrlLocal = process.env.MONGO_URL_LOCAL

const connectToDb = async () => {
  try {
    await mongoose.connect(mongoUrlLocal);
    console.log("connected to DB");
  } catch (error) {
    console.log("DB connection error", error);
  }
};

module.exports = connectToDb;
