const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("DB connected");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDB;
