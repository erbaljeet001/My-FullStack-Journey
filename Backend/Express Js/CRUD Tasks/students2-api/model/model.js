import mongoose from "mongoose";

const usersSchema=new mongoose.Schema(
  {
    name:String,
    course:String,
    email:String,
    mobile:String
   }
)

export const userModel = mongoose.model("students", usersSchema);

 