import mongoose from "mongoose"



const db = async (req, res) =>
{
  const con = await mongoose.connect('mongodb://localhost:27017/employeesDB');
  if(con)
  {
    console.log(`Database is Connected Successfully..`);
    
  }
  
}

export default db;