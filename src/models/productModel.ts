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

  async getAll(): Promise<IProduct[]> {
    const query = `SELECT * FROM
    Trybesmith.Products;
    `;
    const [data] = await connection.query(query);

    return data as IProduct[];
  },
};

export default productModel;