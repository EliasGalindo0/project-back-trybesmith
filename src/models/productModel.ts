import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/types';
import connection from './connection';

const productModel = {

  async add(product: IProduct) {
    const { name, amount } = product;
    const query = `INSERT INTO
    Trybesmith.Products (name, amount)
    VALUES
    (?, ?)
    `;
    const [result] = await connection.query<ResultSetHeader>(query, [name, amount]);

    const { insertId } = result;

    return insertId;
  },
};

export default productModel;