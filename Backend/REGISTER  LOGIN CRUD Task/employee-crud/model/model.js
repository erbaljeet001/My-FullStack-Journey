

import mongoose from "mongoose";



const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
   salary: String,
   city: String
})

export const  employeeModel = mongoose.model('employees', employeeSchema);