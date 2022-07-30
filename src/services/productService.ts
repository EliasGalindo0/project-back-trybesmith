import productModel from '../models/productModel';
import { IProduct } from '../interfaces/types';

const productService = {

  async add(product: IProduct) {
    const insertProdcut = await productModel.add(product);
    return insertProdcut;
  },

  async getAll(): Promise<IProduct[]> {
    const products = await productModel.getAll();
    return products;
  },
};

export default productService;