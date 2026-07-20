import mongoose from "mongoose";

const dbConnect = async () =>
{
  const conn =await mongoose.connect('mongodb://localhost:27017/productDB');
    if(conn)
    {
        console.log("Database Connected...");
        
    }
}
export default dbConnect;