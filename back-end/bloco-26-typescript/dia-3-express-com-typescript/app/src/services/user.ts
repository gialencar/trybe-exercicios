import IUser from '../interfaces/users.interface';
import Model from '../models/user';

export default class User {
  public userModel: Model;
  constructor() {
    this.userModel = new Model();
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.userModel.getAll();

    return users as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.userModel.getById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user as IUser;
  }
}
