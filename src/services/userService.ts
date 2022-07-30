import { IUser } from '../interfaces/types';
import userModel from '../models/userModel';

const userService = {

  async add(user: IUser) {
    const insertUser = await userModel.add(user);
    return insertUser;
  },
};

export default userService;