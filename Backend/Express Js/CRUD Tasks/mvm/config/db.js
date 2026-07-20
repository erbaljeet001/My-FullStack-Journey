import mongoose from "mongoose";
const dbConnection = async () =>
{
  const connect = await mongoose.connect('mongodb://localhost:27017/mvcDB');

  if (connect)
  {
     console.log(`Db connected ...`);
     
  }
  

}
export default dbConnection; 


