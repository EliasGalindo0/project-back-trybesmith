import { Request, Response } from 'express';
import orderService from '../services/orderService';

const orderController = { 

  async getAll(req: Request, res: Response) {
    const orders = await orderService.getAll();

    return res.json(orders);
  },
};

export default orderController;