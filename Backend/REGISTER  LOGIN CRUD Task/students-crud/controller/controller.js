
import {studentModel} from '../model/model.js'
export const addControl = async (req,res) =>
{
  try {
       const { name, course, email, mobile } = req.body;
    const isExists = await studentModel.findOne({ email });
    if (isExists)
    {
      res.json({
        code: 400,
        success: false,
        message: "email already registered",
        data: isExists,
        error : true,
      })
    }
    else {
      const data = new studentModel({ name, course, email, mobile });
      const result = await  data.save();
      res.json(
        {
          code:200,
        success: true,
        message: "email registration successfully",
        data:  result,
        error : false,
        }
      )
    }
    
  }
  catch (error)
  {
    res.json({
  code: 400,
  success: false,
  message: "email registration failed",
  data:[],
  error: true,
});
      
  }
}

export const  getControl = async (req, res) =>
{
  try {
    const result = await studentModel.find();
    res.json({
      code: 200,
      success: true,
      message: "Data get Successfully",
      data: result,
      error: false,
    })

  
  } catch(error)
  {
     
      res.json({
      code: 200,
      success: true,
      message: "Data get Successfully",
      data: result,
      error: false,
    })
  }
}


export const delControl = async (req, res) =>
{
  try {
    const { _id } = req.params;
    const result =await  studentModel.deleteOne({ _id });
    res.json({
      code: 200,
      success: true,
      message: "Deletion Successfully.",
      data: result,
      error : false,
     
    })
  }
  catch (error)
  {
    
    res.json({
      code: 400,
      success: false,
      message: "Deletion Failed.",
      data: [],
      error : true,
     
    })
   
  }
}

export const editControl = async (req, res) =>
{
  try {
    const { _id } = req.params;
  const { name, course, email, mobile } = req.body;
    const result = await studentModel.updateOne({ _id }, { $set: { name, course, email, mobile } });
    

    res.json({
      code: 200,
      success: true,
      message: "Update Successfully.",
      data: result,
      error : false,
     
    })
  }
  catch (error)
  {
    res.json({
      code: 400,
      success: false,
      message: " update Failed.",
      data:[],
      error : true,
     
    })

  }
 
  
}