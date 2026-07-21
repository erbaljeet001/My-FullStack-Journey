import mongoose from "mongoose"


const db = async () =>
{
  const conn =await mongoose.connect('mongodb://localhost:27017/studentDB');
  if (conn)
  {
      console.log(`Database is Connected...`);
      
  }
}

export default db;