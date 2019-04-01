import { injectable, inject } from 'inversify';
import { TYPES } from '../constant/Types';
import { MongoDBClient } from '../utils/mongodb/MongoDBClient';


@injectable()
export class UserDao implements UserDao {

    @inject(TYPES.MongoDBClient) private readonly client: MongoDBClient;
    private collection: string = 'users';

    public async find<User>(filter: Object): Promise<User[]> {
        const result: User[] = await this.client.find(this.collection, {});
        return result;
    }
}