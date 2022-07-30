import orderModel from '../models/orderModel';

const orderService = {

  async getAll() {
    const result = await orderModel.getAll();

    return result;
  },
};

export default orderService;