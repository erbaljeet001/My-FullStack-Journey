import { productModel } from "../model/model.js";


export const addProduct = async(req,res) =>
{
  const { name, price, category, stock } = req.body;
  const data = new productModel({ name, price, category, stock });
     const result =await data.save();
  res.send(result);
}


export const getProduct = async (req, res) => {
  const result = await productModel.find();
  res.send(result);
};

export const delProduct = async (req, res) => {
  const { _id } = req.params;
  const result = await productModel.deleteOne({ _id });
  res.send(result);
};

export const editProduct = async (req, res) => {
  const { _id } = req.params;
  const {name, price, category, stock } = req.body;
  const result = await productModel.updateOne({ _id }, { $set: {name, price, category, stock } });
  res.send(result);
  

};