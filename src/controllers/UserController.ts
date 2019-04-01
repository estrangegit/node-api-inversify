import {
  controller, httpGet, httpPost, requestParam, httpPut
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { Request, Response, NextFunction } from 'express';
import { TYPES } from '../constant/Types';
import { IUserService } from '../interfaces/IUserService';
import { User } from '../entities/User';

@controller('/user')
export class UserController {

  @inject(TYPES.UserService) private readonly userService: IUserService;

  @httpGet('/')
  public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    const users: User[] =  await this.userService.getAllUsers();
    res.send(users);
  }

  @httpPost('/')
  public async addUser (req: Request, res: Response, next: NextFunction): Promise<void> {
    const user: User = new User(undefined, req.body.name, req.body.email, req.body.password);
    await this.userService.addUser(user);
    res.status(204).send();
  }

  @httpPut('/:id')
  public async updateUser(@requestParam('id') id: string, req: Request, res: Response, next: NextFunction): Promise<void> {
    const user: User = new User(undefined, req.body.name, req.body.email, req.body.password);
    await this.userService.updateUser(id, user);
  }
}
