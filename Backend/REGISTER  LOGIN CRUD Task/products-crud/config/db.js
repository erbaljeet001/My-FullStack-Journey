import mongoose from "mongoose"


const db = async (req, res) =>
{
  const con = await mongoose.connect('mongodb://localhost:27017/productDB');
  if (con)
  {
    console.log(`database is Connected..`);
    
  }
}

export default db;