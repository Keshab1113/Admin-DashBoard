require('dotenv').config()
const mongoose = require("mongoose");



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is Connected.");
    } catch (error) {
        console.log(`Database Connection Failed: ${error}`);
        process.exit(0);
    }
}

module.exports = connectDB;