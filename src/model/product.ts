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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;