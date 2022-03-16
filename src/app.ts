import express from 'express';
import cors from 'cors';

import productRouter from './routes/product.route';
import error from './middlewares/error';

const app = express();

app.use(cors());

app.use('/', productRouter);

app.use(error);

export default app;
