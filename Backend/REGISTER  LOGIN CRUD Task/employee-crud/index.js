import express from 'express'
import { log } from 'node:console';
import db from './config/db.js'
import router from './router/router.js'
const app = express();
const PORT = 8005;
app.use(express.json());

db();

app.use(router);
app.listen(PORT, () =>
{
  console.log(`Server run at port ${PORT}`);
  
})