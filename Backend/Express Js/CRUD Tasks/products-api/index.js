import express from 'express'
import mongoose from 'mongoose'
import dbConnect from './config/db.js';
import router from './route/router.js';

const app = express();
const PORT = 3002;
app.use(express.json());


dbConnect();
// api
app.use(router);




app.listen(PORT, () =>
{
    console.log(`Server running at port ${PORT}`);
    
})