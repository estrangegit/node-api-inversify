import {
  controller, httpGet, httpPost, httpPut, httpDelete
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { IUser } from "../interfaces/IUser";
import { Request } from 'express';
import { TYPES } from '../constant/Types';
import { IUserService } from '../interfaces/IUserService';

@controller('/user')
export class UserController {

  @inject(TYPES.UserService) private readonly userService: IUserService;

  @httpGet('/')
  public getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @httpGet('/:id')
  public getUser(request: Request): IUser {
    return this.userService.getUser(request.params.id);
  }

  @httpPost('/')
  public newUser(request: Request): IUser {
    return this.userService.newUser(request.body);
  }

  @httpPut('/:id')
  public updateUser(request: Request): IUser {
    return this.userService.updateUser(request.params.id, request.body);
  }

  @httpDelete('/:id')
  public deleteUser(request: Request): string {
    return this.userService.deleteUser(request.params.id);
  }
}
