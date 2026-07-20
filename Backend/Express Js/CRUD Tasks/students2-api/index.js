import express, { Router } from 'express'
import mongoose from 'mongoose';
import dbConnection from './config/db.js';
import router from './route/router.js';
const app = express();
const PORT = 3020;
app.use(express.json());

dbConnection();

// api
app.use(router); 

app.listen(PORT, () =>
{
    console.log(`Server running at port ${PORT}`);
    
})