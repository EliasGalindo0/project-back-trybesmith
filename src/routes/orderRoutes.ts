import { Router } from 'express';
import orderController from '../controllers/orderController';

const orderRoutes = Router();

orderRoutes.get('/', orderController.getAll);

export default orderRoutes;