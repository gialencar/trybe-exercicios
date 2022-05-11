import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/user';

class UsersController {
  constructor(private Service = new UsersService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const users = await this.Service.getAll();
    return res.status(StatusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user = await this.Service.getById(parseInt(id, 10));
    return res.status(StatusCodes.OK).json(user);
  };
}

export default UsersController;
