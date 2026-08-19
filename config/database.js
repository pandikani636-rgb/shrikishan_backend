const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/flipkart";


const connectDatabase = () => {
    console.log("Connecting to MongoDB URI starting with:", MONGO_URI.substring(0, 20));
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((err) => {
            console.error("MongoDB Connection Error: ", err);
        });
}

module.exports = connectDatabase;