import mongoose from "mongoose";
const dbconnection = async () =>
{
  const connection = await mongoose.connect('mongodb://localhost:27017/studentDB');
  if (connection)
  {
      console.log("Database Connected Successfully.....");
      
  }
}

export default dbconnection;