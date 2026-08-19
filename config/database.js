const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/flipkart";


const connectDatabase = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Mongoose already connected");
        return;
    }
    
    try {
        await mongoose.connect(MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            bufferTimeoutMS: 30000, // 30 seconds
        });
        console.log("Mongoose Connected");
    } catch (err) {
        console.error("MongoDB Connection Error: ", err);
    }
}

module.exports = connectDatabase;