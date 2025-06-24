//DATABASE CONECTION
const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/practiceDB");
    console.log("connected to DB");
  } catch (error) {
    console.log("DB connection error", error);
  }
};

module.exports = connectToDb;
