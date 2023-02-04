const mongoose = require("mongoose");

const db = process.env.uri;
console.log("mongo", db);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
