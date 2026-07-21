import { productModel } from "../model/model.js";


export const addProduct = async (req, res) =>
{
  try {
    const { name, price, category, stock } = req.body;
    const isMatch = await productModel.findOne({ name });
    if (isMatch)
    {
      res.json({
        code: 400,
        success: false,
        message: "Product Name already exits",
        data: [],
        error: true,
      })
      
    }
    else {
      const data = new productModel({ name, price, category, stock });
      const result =await data.save();
       res.json({
        code: 200,
        success: true,
        message: "product added successfully.",
        data: [],
        error: false,
      })
    }
  } catch(error)
  {
      
    res.json({
        code: 200,
        success: true,
        message: "product not added",
        data: [],
        error: false,
      })
       
  }
}

export const getProduct = async (req, res) =>
{
  try
  {
    const result = await productModel.find();
    res.json({
      code: 200,
      success: true,
      message: "Product Read Successfully",
      data: result,
      error : false
    })
  }
  catch (error)
  {
    res.json({
        code: 400,
      success: false,
      message: "Product not Get",
      data: result,
      error : true
     })
  }
  
}


export const delProduct = async (req, res) =>
{
  try {
    const { _id } = req.params;
    const result = await productModel.deleteOne({ _id });
    res.json({
      code: 200,
      success: true,
      message: "Product deleted",
      data: result,
      error: false
    })
  }
    catch (error)
    {
        res.json({
      code: 400,
      success: false,
      message: "Product not deleted",
      data: [],
      error: true
    })
    }
  
}

export const editProduct = async (req, res) =>
{
  try {
    const { _id } = req.params;
    const { name, price, category, stock } = req.body;
    const result = await productModel.updateOne({ _id }, { $set: { name, price, category, stock } });
    res.json({
      code: 200,
      success: true,
      message: "Product Modify Successfully",
      data: result,
      error: false
    })
  }
    catch(error)
    {
        res.json({
      code: 400,
      success: false,
      message: "Product not be changed",
      data: [],
      error: true
    })
    }
  
}

