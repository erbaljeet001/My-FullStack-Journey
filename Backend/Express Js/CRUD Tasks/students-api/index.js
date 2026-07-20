import express from 'express'
import mongoose from 'mongoose'
import dbconnection from './config/db.js';
import router from './route/router.js';



const app = express();
const PORT = 3001;
app.get('/get', (req, res) =>
{
    try {

        throw new Error("Testing internal server error");
        res.json({
            code: 200,
            success: true,
            message: "Fine",
            data: [],
            error :false
       }) 
         
    }
    catch (error)
    {
        console.log(error);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error ",
            data: [],
           error: true
          })
    }
})

app.use(express.json());


dbconnection();


//api
app.use(router);

app.listen(PORT, () =>
{
    console.log(`Server is running at ${PORT}`);
    
})
