import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/types';

const tokenMiddleware = async (user: IUser) => {
  const secret = 'password';

  const { password, ...newUser } = user;
  const token = jwt.sign({ data: newUser }, secret);

  return token;
};

export default tokenMiddleware;