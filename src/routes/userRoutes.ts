import { Router } from 'express';
import userController from '../controllers/userController';

const userRoutes = Router();

userRoutes.post('/', userController.add);

export default userRoutes;