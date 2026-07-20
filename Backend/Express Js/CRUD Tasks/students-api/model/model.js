
import mongoose from "mongoose"; 
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  email: String,
  mobile : String
});

export const studentModel = mongoose.model("students", studentSchema);