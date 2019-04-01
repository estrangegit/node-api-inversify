import { injectable, inject } from 'inversify';
import { User } from "../entities/User";
import { IUserService } from '../interfaces/IUserService';
import { TYPES } from '../constant/Types';
import { UserDao } from '../daos/UserDao';

@injectable()
export class UserService implements IUserService{

  @inject(TYPES.UserDao) private readonly userDao: UserDao;

  public async getAllUsers(): Promise<User[]> {
    return await this.userDao.getAllUsers();
  }

  public async addUser(user: User): Promise<void> {
    await this.userDao.addUser(user);
  }

  public async updateUser(id: string, user: User): Promise<void> {
    await this.userDao.updateUser(id, user);
  }

}
