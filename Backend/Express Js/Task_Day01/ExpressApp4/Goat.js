import express from 'express'

const name = express();
const port = 2000;
name.listen(port, () =>
{
   console.log(`server running at ${port} port`);
   
})