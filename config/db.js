const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yugTest:Yug1234@cluster0-backend-projec.utixa5m.mongodb.net/restapi?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;