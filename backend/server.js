require('dotenv').config();  // Load environment variables from .env

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_TOKEN)
.then(()=>{
    console.log('\nConnected to the database :D!');
}).catch((error) => {
    console.log(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
