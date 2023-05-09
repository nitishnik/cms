import express from 'express';
import userRoutes from './app/routes/userRoutes';
import connectDB from './app/configs/dbConnection';
import errorHandler from './app/middlewares/errorHandler';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
connectDB(); // connect to database

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello Nitish API' });
});

app.use('/api/users', userRoutes);
app.use(errorHandler);
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
