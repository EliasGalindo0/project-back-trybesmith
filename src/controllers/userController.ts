import { Request, Response } from 'express';
import { IUser } from '../interfaces/types';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import userService from '../services/userService';

const userController = {

  async add(req: Request, res: Response) {
    const user = req.body as IUser;
    const id = await userService.add(user);
    const token = await tokenMiddleware({ id, ...req.body });
    return res.status(201).json({ token });
  },
};

export default userController;