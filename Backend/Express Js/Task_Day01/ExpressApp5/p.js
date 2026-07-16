import express from "express"

const Hero = express();
const PORT = 2000;
Hero.listen(PORT, () =>
{
   console.log(`server running at port ${PORT}`);
   
})