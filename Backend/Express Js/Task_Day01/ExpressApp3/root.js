import express from 'express'

const z = express();
const PORT = 2000;
z.listen(PORT, () =>
{
   console.log(`Server Running at ${PORT} port`);
   
})