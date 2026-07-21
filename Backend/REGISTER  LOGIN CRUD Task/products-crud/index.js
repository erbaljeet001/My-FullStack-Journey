import express from 'express'
import db from './config/db.js'
import router from './router/router.js';
const app = express();
const PORT = 8004;
app.use(express.json())


db();

app.use(router);


app.listen(PORT, () =>
{
    console.log(`Server is working.. at port ${PORT}`);
    
})