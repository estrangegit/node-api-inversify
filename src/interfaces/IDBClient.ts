import { InsertOneWriteOpResult, UpdateWriteOpResult } from 'mongodb';

export interface IDBClient {
    find<T>(collection: string, filter: Object, mapDbToValues: Function): Promise<T[]>;
    findOne<T>(collection: string, filter: Object, mapDbToValues: (user: any) => T): Promise<T>;
    insert<T>(collection: string, model: T, mapValueToDb: ((data: T) => any)): Promise<InsertOneWriteOpResult>;
    update<T>(collection: string, id: string,  model: T): Promise<UpdateWriteOpResult>;
}