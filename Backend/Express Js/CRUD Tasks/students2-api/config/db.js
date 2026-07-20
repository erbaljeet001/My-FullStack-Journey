import mongoose from "mongoose";
const dbConnection = async (req, res) => {
  const conn = await mongoose.connect('mongodb://localhost:27017/studentDB');
  if (conn)
  {
      console.log(`Database Connected Successfully...`);
      
  }
}

export default dbConnection;