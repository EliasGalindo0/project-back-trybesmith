import express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

app.use(errorHandlerMiddleware);

export default app;
