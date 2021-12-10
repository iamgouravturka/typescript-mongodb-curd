import {
    Schema
  } from 'mongoose';
  import mongoose from 'mongoose';
  
 const ProductSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    productName: String,
    productCode: String,
    proddescription: String,
    prodRating: Number,
  });

const Product = mongoose.model("product", ProductSchema);
export default Product;