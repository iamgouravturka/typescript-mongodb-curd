
import express from 'express';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controller/product';
import { getProductList } from '../controller/product';

const productRoute = express.Router();

productRoute.put('/:id', updateProduct).delete('/:id', deleteProduct).post('/', createProduct).get('/:id', getProduct).get('/', getProductList);

export default productRoute;

