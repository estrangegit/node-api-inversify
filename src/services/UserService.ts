import { injectable, inject } from 'inversify';
import { User } from "../entities/User";
import { IUserService } from '../interfaces/IUserService';
import { TYPES } from '../constant/Types';
import { IUserDao } from '../interfaces/IUserDao';

@injectable()
export class UserService implements IUserService{

  @inject(TYPES.UserDao) private readonly userDao: IUserDao;

  public async getAllUsers(): Promise<User[]> {
    return await this.userDao.getAllUsers();
  }

  public async getUserByName(name: string): Promise<User> {
    return await this.userDao.getUserByName(name);
  }

  public async addUser(user: User): Promise<void> {
    await this.userDao.addUser(user);
  }

  public async updateUser(id: string, user: User): Promise<void> {
    await this.userDao.updateUser(id, user);
  }

}
