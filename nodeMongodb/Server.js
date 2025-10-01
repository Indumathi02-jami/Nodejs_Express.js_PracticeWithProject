const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/EmployeeRoutes');

const app = express();

dotenv.config();

app.use(bodyParser.json());

mongoose.connect(process.env.Mongo_URL)
.then((client)=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err); 
})

const PORT= 5000

app.use('/employee', employeeRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
