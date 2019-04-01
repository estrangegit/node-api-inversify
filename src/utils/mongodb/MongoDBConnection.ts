import { Db, MongoClient } from 'mongodb';

const connStr = 'mongodb://localhost:27017';
const dbName = "node-api-inversify";

export class MongoDBConnection {
  private static isConnected: boolean = false;
  private static db: Db;

  public static async getConnection(): Promise<Db> {
    if (MongoDBConnection.isConnected) {
      return MongoDBConnection.db;
    } else {
      MongoDBConnection.db = await this.connect();
      MongoDBConnection.isConnected = true;
      return MongoDBConnection.db;
    }
  }

  private static async connect(): Promise<Db> {
    try{
      const client: MongoClient = await MongoClient.connect(connStr);
      const db: Db = await client.db(dbName);
      return db;
    }catch(err){
      console.log(err);
    }
  }
}