import {
  controller, httpGet, httpPost, httpPut, httpDelete
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
  public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    const users: User[] =  await this.userService.getUsers();
    res.send(users);
  }

  @httpGet('/:id')
  public getUser(request: Request): User {
    return this.userService.getUser(request.params.id);
  }

  @httpPost('/')
  public newUser(request: Request): User {
    return this.userService.newUser(request.body);
  }

  @httpPut('/:id')
  public updateUser(request: Request): User {
    return this.userService.updateUser(request.params.id, request.body);
  }

  @httpDelete('/:id')
  public deleteUser(request: Request): string {
    return this.userService.deleteUser(request.params.id);
  }
}
