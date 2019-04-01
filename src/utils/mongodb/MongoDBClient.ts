import { MongoDBConnection } from './MongoDBConnection';
import { IDBClient } from '../../interfaces/IDBClient';
import { injectable } from 'inversify';

@injectable()
export class MongoDBClient implements IDBClient {

  public async find<T>(collection: string, filter: Object): Promise<T[]> {
    const result: T[] = await (await MongoDBConnection.getConnection()).collection(collection).find(filter).toArray();
    return result;
  }
}