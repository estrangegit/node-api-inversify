import 'mocha';

import { expect } from 'chai';
import { Container } from 'inversify';
import { IUserDao } from '../../src/interfaces/IUserDao';
import { IDBClient } from '../../src/interfaces/IDBClient';
import { TYPES } from '../../src/constant/Types';
import { UserDao } from '../../src/daos/UserDao';
import { MongoDBClient } from '../../src/utils/mongodb/MongoDBClient';
import { User } from '../../src/entities/User';
import { MongoDBConnection } from '../../src/utils/mongodb/MongoDBConnection';

const iocContainer = new Container();
iocContainer.bind<IUserDao>(TYPES.UserDao).to(UserDao);
iocContainer.bind<IDBClient>(TYPES.MongoDBClient).to(MongoDBClient);

const dao: UserDao = iocContainer.get(TYPES.UserDao);

describe('UserDao', () => {

  afterEach(async () => {
    await (await MongoDBConnection.getConnection()).collection('users').drop();
  });

  describe('write operations', () => {

    describe('addUser', () => {
      it('Should add user in DB', async () => {
        const user1 = new User('id1', 'user1', 'email1', 'password1');
        await dao.addUser(user1);
        const result: User[] = await dao.getAllUsers();
        expect(result).lengthOf(1);
        expect(result[0]).eql(user1);
      });
    });
  });
});
