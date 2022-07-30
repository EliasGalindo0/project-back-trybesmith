import { RowDataPacket } from 'mysql2';
import connection from './connection';

const orderModel = {

  async getAll(): Promise<RowDataPacket[]> {
    const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS prod
    ON prod.orderId = ord.id
    GROUP BY ord.id
    ORDER BY ord.userId;`;

    const [result] = await connection.query(query);

    return result as RowDataPacket[];
  },
};

export default orderModel;