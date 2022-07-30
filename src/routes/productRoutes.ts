import { Router } from 'express';
import productController from '../controllers/productController';

const productRoutes = Router();

productRoutes.get('/', productController.getAll);
productRoutes.post('/', productController.add);

export default productRoutes;