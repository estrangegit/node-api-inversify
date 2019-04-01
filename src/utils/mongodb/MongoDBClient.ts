import { MongoDBConnection } from './MongoDBConnection';
import { IDBClient } from '../../interfaces/IDBClient';
import { injectable } from 'inversify';
import { InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';

@injectable()
export class MongoDBClient implements IDBClient {

  public async find<T>(collection: string, filter: Object, mapDbToValues: (users: any[]) => T[]): Promise<T[]> {
    const result: any[] = await (await MongoDBConnection.getConnection()).collection(collection).find(filter).toArray();
    return mapDbToValues(result);
  }

  public async findOne<T>(collection: string, filter: Object, mapDbToValues: (user: any) => T): Promise<T> {
    const result: any[] = await (await MongoDBConnection.getConnection()).collection(collection).findOne(filter);
    return mapDbToValues(result);
  }

  public async insert<T>(collection: string, model: T, mapValueToDb: ((user: T) => any)): Promise<InsertOneWriteOpResult> {
    return (await MongoDBConnection.getConnection()).collection(collection).insertOne(mapValueToDb(model));
  }

  public async update<T>(collection: string, id: string,  model: T): Promise<UpdateWriteOpResult> {
    return (await MongoDBConnection.getConnection()).collection(collection).updateOne(
      { _id: id },
      { $set: model })
  }
}