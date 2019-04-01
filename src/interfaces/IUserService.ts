import { User } from "../entities/User";

export interface IUserService {
    getAllUsers(): Promise<User[]>;
    addUser(user: User): Promise<void>;
    updateUser(id: string, user: User): Promise<void>
}