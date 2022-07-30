import express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use(errorHandlerMiddleware);

export default app;
