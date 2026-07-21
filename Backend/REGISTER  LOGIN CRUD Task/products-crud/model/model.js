import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  stock : String
})

export const productModel = mongoose.model('products', productSchema);