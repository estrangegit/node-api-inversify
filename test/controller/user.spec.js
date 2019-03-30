"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var user_1 = require("../../controller/user");
var user_2 = require("../../service/user");
describe('UserController', function () {
    var controller;
    beforeEach(function () {
        controller = new user_1.UserController(new user_2.UserService());
    });
    it('should get back all user', function () {
        chai_1.expect(controller.getUsers()).to.deep.equal([{
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            }, {
                email: 'doloe@sit.com',
                name: 'Dolor'
            }]);
    });
    it('should give back the right user', function () {
        chai_1.expect(controller.getUser({
            params: {
                id: 'Lorem'
            }
        })).to.deep.equal({
            email: 'lorem@ipsum.com',
            name: 'Lorem'
        });
    });
    it('should add a new user', function () {
        chai_1.expect(controller.getUsers()).to.have.length(2);
        chai_1.expect(controller.newUser({
            body: {
                email: 'test@test.com',
                name: 'test'
            }
        })).to.deep.equal({
            email: 'test@test.com',
            name: 'test'
        });
        chai_1.expect(controller.getUsers()).to.have.length(3);
    });
    it('should update a existing user', function () {
        chai_1.expect(controller.updateUser({
            body: {
                email: 'changed@changed.com',
                name: 'Lorem'
            }, params: {
                id: 'Lorem'
            }
        })).to.deep.equal({
            email: 'changed@changed.com',
            name: 'Lorem'
        });
    });
    it('should delete a user', function () {
        chai_1.expect(controller.getUsers()).to.have.length(2);
        chai_1.expect(controller.deleteUser({
            params: {
                id: 'Lorem'
            }
        })).to.equal('Lorem');
        chai_1.expect(controller.getUsers()).to.have.length(1);
    });
});
