
import express from 'express';
import { Product as ProdcutStructure } from '../interface/productInf';
import Product  from "../model/product";

export const getProductList = async (req:any, res:any) => {
    const data:any = await Product.find().populate('user');
    res.send(data);
  };

// Get product by ID
export const getProduct = async (req:express.Request, res:express.Response) => {
    const product: any = req.params;
    try {
        if(!product.id)
            return res.status(500).send("Error")
        const data:any = await Product.findById({_id: product.id}).populate('user')
        res.send(data);

            
    } catch (error) {
       console.error("error");
    }
  };

  // Create product
  export const createProduct = async (req:any, res:any) => {
    const request: ProdcutStructure = req.body;
    let prod = new Product(request);
    prod.save((err:any, result:any) => {
      if (err) {
        res.send("Error!");
      } else {
          console.log(JSON.stringify(result))
            res.send(result);
          }
    });
  };

//Update product by ID 
export const updateProduct = async (req:express.Request, res:express.Response) => {
    const product: any = req.params;
    const productBody: ProdcutStructure = req.body;
    try {
      if (!product.id)
        return res.status(500).send("Error")
      const data:any = await Product.findByIdAndUpdate({_id: product.id});
      if(productBody.productName) data.productName = productBody.productName;
      if(productBody.productCode) data.productCode = productBody.productCode;
    
      const result = await data.save();
      res.send(result);
    } catch (error) {
        console.error("Error");
    }     
  };

  // Delete Product By ID
  export const deleteProduct = async (req:any, res:any) => {
    const product: ProdcutStructure = req.params;

    const result:any = await Product.findOneAndDelete({_id: product.id});

    res.send(result);
  };
    