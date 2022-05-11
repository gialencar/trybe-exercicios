import { Pool } from 'mysql2/promise';
import connection from '../connection';
import IUser from '../interfaces/users.interface';

export default class User {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [result] = await this.connection.execute('SELECT * FROM Users');

    return result as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const [result] = await this.connection.execute('SELECT * FROM Users WHERE id = ?', [id]);
    const [user] = result as IUser[];

    return user;
  }
}
