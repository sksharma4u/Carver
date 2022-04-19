const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const routesUrls = require('./routes/Routes');
const router = require('./routes/Routes');
const cors = require('cors')

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,() => console.log("Database conn"))

app.use(express.json())
app.use(cors())
app.use('/api',routesUrls)

app.listen(4000,()=> console.log('server is up and running '));