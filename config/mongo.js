const mongoose = require('mongoose');

const dbConnect = () => {
    const dbUri = process.env.DB_URI;

    mongoose.set("strictQuery", false);

    try {
        mongoose.connect(db_uri);
    } catch (error) {
        console.error("Error connecting to database: ", error);
    }

    mongoose.connection.on("connected", () => console.log("Connected to database"));
}

module.exports = dbConnect;