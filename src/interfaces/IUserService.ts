import { User } from "../entities/User";

export interface IUserService {
    getUsers(): Promise<User[]>;
    getUser(name: string): User;
    newUser(user: User): User;
    updateUser(name: string, user: User): User;
    deleteUser(name: string): string;
}