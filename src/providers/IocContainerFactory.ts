import { Container } from "inversify";
import { TYPES } from "../constant/types";
import { UserService } from "../service/user";

export function iocContainerFactory(): Container {
    const iocContainer = new Container();

    iocContainer.bind<UserService>(TYPES.UserService).to(UserService);

    return iocContainer;
}