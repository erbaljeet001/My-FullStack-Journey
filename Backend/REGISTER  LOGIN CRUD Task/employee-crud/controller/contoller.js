
import { employeeModel } from "../model/model.js"



export const addEmployee = async (req, res) =>
{
  try {
    
    const { name, department, salary, city } = req.body;
  const isMatch = await employeeModel.findOne({ name });
  if(isMatch)
  {
    res.json({
      code: 400,
      success : false,
      message : "Employee name is already exits",
      data : isMatch,
        error: true
    })

            
  }
  else
  {
    const data = new employeeModel({ name, department, salary, city });
    const result = await data.save();
     res.json({
      code: 200,
      success : true,
      message : "Employee added Successfully",
      data : data,
        error: false
    })
  }
  }
  catch (error)
  {
    console.log(error);
     res.json({
      code: 200,
      success : true,
      message : "Employee added Successfully",
      data : [],
        error: false
    })
    
  }
}

export const getEmployee = async (req, res) =>
{
  try {
    
    
  const result = await employeeModel.find();
  
    res.json({
      code: 200,
      success : true,
      message : "Employee Get Successfully",
      data : result,
        error: true
    })

  }
  catch (error)
  {
    console.log(error);
     res.json({
      code: 200,
      success : true,
      message : "Employee not Find",
      data : [],
        error: false
    })
    
  }
}

export const delEmployee = async (req, res) =>
{
  try {
    
    const { _id } = req.params; 
  const result = await employeeModel.deleteOne({_id});
  
    res.json({
      code: 200,
      success : true,
      message : "Employee delete Successfully",
      data : result,
        error: true
    })

  }
  catch (error)
  {
    console.log(error);
     res.json({
      code: 200,
      success : true,
      message : "Employee not deleted",
      data : [],
        error: false
    })
    
  }
}

export const editEmployee = async (req, res) =>
{
  try {
    const { _id } = req.params;
    const { name, department, salary, city } = req.body;
    const data = await employeeModel.updateOne({ _id }, {$set: { name, department, salary, city }});
   

    res.json({
      code: 200,
      success : true,
      message : "Employee Updated",
      data : data,
        error: false
    })
  }
  
  catch (error)
  {
    console.log(error);
     res.json({
      code: 400,
      success : false,
      message : "Employee not updated",
      data : [],
        error: true
    })
    
  }
}







