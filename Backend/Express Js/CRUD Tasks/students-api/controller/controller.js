import router from "../route/router.js";
import { studentModel } from "../model/model.js";

export const addControl = async (req,res) =>
{
  const { name, course, email, mobile } = req.body;
  const data = new studentModel({ name, course, email, mobile });
  const result = await data.save();
  res.send(result);
}



export const getControl = async (req, res) => {
  const result = await studentModel.find();
  res.send(result);
};


// app.delete('/delete-student', async (req, res) =>
// {

//   const { name } = req.query;
//   const result = await studentModel.deleteOne({ name });
//    res.send(result)
// })

// app.put('/update-student', async (req,res) =>
// {
//   const { name } = req.query;
//   const { course, email, mobile } = req.body;
//   const result =await studentModel.updateOne({name }, { $set: { course, email, mobile } })
  
//   res.send(result);
// })
