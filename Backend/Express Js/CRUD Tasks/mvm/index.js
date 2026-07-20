import express from 'express';
import dbConnection from './config/db.js';
import router from './route/router.js';
const app = express();
app.use(express.json())
const PORT = 8000;
dbConnection();

app.use(router);
app.listen(PORT, () =>
{
    console.log(`Server running at port ${PORT}`);
    
})



