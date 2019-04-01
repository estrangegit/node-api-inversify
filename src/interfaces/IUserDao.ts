import { User } from '../entities/User';
import { InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';

export interface IUserDao {
    getAllUsers(): Promise<User[]>;
    getUserByName(name: string): Promise<User>
    addUser(user: User): Promise<InsertOneWriteOpResult>;
    updateUser(id: string, user: User): Promise<UpdateWriteOpResult>;
}