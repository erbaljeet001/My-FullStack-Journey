import { userModel } from "../model/model.js";


export  const addControl = async (req, res) =>
{
  const { name, course, email, mobile } = req.body;
  const data = userModel({ name, course, email, mobile });
  const result = await data.save();
  res.send(result);

}

export  const getControl = async (req, res) =>
{
  
  const result = await userModel.find();
  res.send(result);

}


export  const delControl = async (req, res) =>
{
  const { _id } = req.params;
  const result = await userModel.deleteOne({_id});
  res.send(result);

}

export  const putControl = async (req, res) =>
{  
  const { _id } = req.params;
  const { name, course, email, mobile } = req.body;
  
  const result = await  userModel.updateOne({_id},{$set:{name, course, email, mobile}});
  res.send(result);

}





