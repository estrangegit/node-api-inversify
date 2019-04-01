import { Container } from "inversify";
import { TYPES } from "../constant/Types";
import { UserService } from "../services/UserService";
import { IUserService } from '../interfaces/IUserService';
import { IDBClient } from '../interfaces/IDBClient';
import { UserDao } from '../daos/UserDao';
import { IUserDao } from '../interfaces/IUserDao';
import { MongoDBClient } from '../utils/mongodb/MongoDBClient';

export function iocContainerFactory(): Container {
    const iocContainer = new Container();

    iocContainer.bind<IUserService>(TYPES.UserService).to(UserService);
    iocContainer.bind<IUserDao>(TYPES.UserDao).to(UserDao);
    iocContainer.bind<IDBClient>(TYPES.MongoDBClient).to(MongoDBClient);

    return iocContainer;
}