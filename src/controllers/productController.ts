import { Request, Response } from 'express';
import { IProduct } from '../interfaces/types';
import productService from '../services/productService';

const productController = {

  async add(req: Request, res: Response) {
    const product = req.body as IProduct;
    const id = await productService.add(product);
    return res.status(201).json({ id, ...req.body });
  },
};

export default productController;