"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var user_1 = require("../../service/user");
describe('UserService', function () {
    var service;
    beforeEach(function () {
        service = new user_1.UserService();
    });
    it('should get back all user', function () {
        chai_1.expect(service.getUsers()).to.deep.equal([{
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            }, {
                email: 'doloe@sit.com',
                name: 'Dolor'
            }]);
    });
    it('should give back the right user', function () {
        chai_1.expect(service.getUser('Lorem')).to.deep.equal({
            email: 'lorem@ipsum.com',
            name: 'Lorem'
        });
    });
    it('should add a new user', function () {
        chai_1.expect(service.getUsers()).to.have.length(2);
        chai_1.expect(service.newUser({
            email: 'test@test.com',
            name: 'test'
        })).to.deep.equal({
            email: 'test@test.com',
            name: 'test'
        });
        chai_1.expect(service.getUsers()).to.have.length(3);
    });
    it('should update a existing user', function () {
        chai_1.expect(service.updateUser('Lorem', {
            email: 'changed@changed.com',
            name: 'Lorem'
        })).to.deep.equal({
            email: 'changed@changed.com',
            name: 'Lorem'
        });
    });
    it('should delete a user', function () {
        chai_1.expect(service.getUsers()).to.have.length(2);
        chai_1.expect(service.deleteUser('Lorem')).to.equal('Lorem');
        chai_1.expect(service.getUsers()).to.have.length(1);
    });
});
