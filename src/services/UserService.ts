import { injectable, inject } from 'inversify';
import { User } from "../entities/User";
import { IUserService } from '../interfaces/IUserService';
import { TYPES } from '../constant/Types';
import { IDBClient } from '../interfaces/IDBClient';

@injectable()
export class UserService implements IUserService{

  @inject(TYPES.UserDao) private readonly userDao: IDBClient;

  private userStorage: User[] = [
    new User('1', 'Lorem', 'lorem@ipsum.com','xxx'),
    new User('2', 'Dolor', 'doloe@sit.com', 'xxx')];


  public async getUsers(): Promise<User[]> {
//    return this.userStorage;
    return await this.userDao.find('users', {});
  }

  public getUser(name: string): User {
    let result: User;
    this.userStorage.map(user => {
      if (user.name === name) {
        result = user;
      }
    });

    return result;
  }

  public newUser(user: User): User {
    this.userStorage.push(user);
    return user;
  }

  public updateUser(name: string, user: User): User {
    this.userStorage.map((entry, index) => {
      if (entry.name === name) {
        this.userStorage[index] = user;
      }
    });

    return user;
  }

  public deleteUser(name: string): string {
    let updatedUser: User[] = [];
    this.userStorage.map(user => {
      if (user.name !== name) {
        updatedUser.push(user);
      }
    });

    this.userStorage = updatedUser;
    return name;
  }
}
