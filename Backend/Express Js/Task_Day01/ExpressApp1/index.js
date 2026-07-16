import express from 'express'

const x = express();
const PORT = 2000;
x.listen(PORT, () =>
{
    console.log(`server running at ${PORT} port`);
    
})
