import { Db, MongoClient } from 'mongodb';

const connStr = 'mongodb://localhost:27017';
const dbName = "node-api-inversify";

export class MongoDBConnection {
  private static isConnected: boolean = false;
  private static db: Db;

  public static async getConnection(): Promise<Db> {
    if (this.isConnected) {
      return this.db;
    } else {
      this.db = await this.connect();
      this.isConnected = true;
      return this.db;
    }
  }

  private static async connect(): Promise<Db> {
    const client: MongoClient = await MongoClient.connect(connStr);
    const db: Db = await client.db(dbName);
    return db;
  }
}