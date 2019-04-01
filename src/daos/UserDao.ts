import { injectable, inject } from 'inversify';
import { TYPES } from '../constant/Types';
import { MongoDBClient } from '../utils/mongodb/MongoDBClient';
import { IUserDao } from '../interfaces/IUserDao';
import { User } from '../entities/User';
import { InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';


@injectable()
export class UserDao implements IUserDao {

    @inject(TYPES.MongoDBClient) private readonly client: MongoDBClient;
    private collection: string = 'users';

    public async getAllUsers(): Promise<User[]> {
        return await this.client.find<User>(this.collection, {}, UserDao.mapDbToValues);
    }

    public async addUser(user: User): Promise<InsertOneWriteOpResult> {
        return await this.client.insert(this.collection, user, UserDao.mapValueToDb)
    }

    public async updateUser(id: string, user: User): Promise<UpdateWriteOpResult> {
        return await this.client.update(this.collection, id, user);
    }

    private static mapDbToValue(data: any): User {
        return new User(data._id, data.name, data.email, data.password);
    }

    private static mapValueToDb(user: User): any {
        return {_id : user.id, name: user.name, email: user.email, password: user.password};
    }

    private static mapDbToValues(users: any[]): User[]{
        return users.map((elem) => UserDao.mapDbToValue(elem));
    }
}