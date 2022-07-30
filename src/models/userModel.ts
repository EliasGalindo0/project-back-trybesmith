import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/types';
import connection from './connection';

const userModel = {

  async add(user: IUser) {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO
    Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);
    `;

    const [result] = await
    connection.query<ResultSetHeader>(query, [username, classe, level, password]);

    const { insertId } = result;

    return insertId;
  },
};

export default userModel;