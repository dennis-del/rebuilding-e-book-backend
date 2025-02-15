require('dotenv').config(); // Ensure environment variables are loaded

const mongoose = require('mongoose');

console.log("🔍 DATABASE Connection String:", process.env.DATABASE); // Debugging

const connectionString = process.env.DATABASE;

if (!connectionString) {
    console.error("❌ DATABASE connection string is missing! Set it in .env or Render.");
    process.exit(1); // Stop execution if DB string is missing
}

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`✅ MongoDB connected successfully`);
})
.catch((err) => {
    console.error(`❌ MongoDB connection error: ${err.message}`);
});
