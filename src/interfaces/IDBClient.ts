export interface IDBClient {
    find<T>(collection: string, filter: Object): Promise<T[]>;
}