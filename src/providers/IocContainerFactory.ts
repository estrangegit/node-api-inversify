import { Container } from "inversify";
import { TYPES } from "../constant/Types";
import { UserService } from "../services/UserService";
import { IUserService } from '../interfaces/IUserService';

export function iocContainerFactory(): Container {
    const iocContainer = new Container();

    iocContainer.bind<IUserService>(TYPES.UserService).to(UserService);

    return iocContainer;
}