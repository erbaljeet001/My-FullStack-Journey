import express from 'express'
import mongoose from 'mongoose'
import db from './config/db.js'
import router from './router/router.js'
const app = express();
const PORT = 8003;
app.use(express.json())

db();
app.use(router);
app.listen(PORT, () =>
{ 
  console.log(`Server is running at port ${PORT}`);    
})

