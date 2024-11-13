require('dotenv').config();  // Load environment variables from .env

const mongoose = require('mongoose');


// MongoDB Connection
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_TOKEN)
.then(()=>{
    console.log('\nConnected to the database :D!');
}).catch((error) => {
    console.log(error);
});

