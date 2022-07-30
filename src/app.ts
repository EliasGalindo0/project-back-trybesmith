import express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import orderRoutes from './routes/orderRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use(errorHandlerMiddleware);

export default app;
