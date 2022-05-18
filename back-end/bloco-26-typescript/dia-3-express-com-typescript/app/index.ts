import express, { Request, Response } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import UsersController from './src/controller/users';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

const users = new UsersController();

app.get('/users', users.getAll);

app.get('/users/:id', users.getById);

app.use((err: Error, _req: Request, res: Response, _next: Function) => {
  const { message } = err;
  if (message === 'Usuário não encontrado') {
    return res.status(StatusCodes.BAD_REQUEST).json({message});
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro interno do servidor' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
