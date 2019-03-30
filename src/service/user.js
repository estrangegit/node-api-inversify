"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var UserService = /** @class */ (function () {
    function UserService() {
        this.userStorage = [{
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            }, {
                email: 'doloe@sit.com',
                name: 'Dolor'
            }];
    }
    UserService.prototype.getUsers = function () {
        return this.userStorage;
    };
    UserService.prototype.getUser = function (id) {
        var result;
        this.userStorage.map(function (user) {
            if (user.name === id) {
                result = user;
            }
        });
        return result;
    };
    UserService.prototype.newUser = function (user) {
        this.userStorage.push(user);
        return user;
    };
    UserService.prototype.updateUser = function (id, user) {
        var _this = this;
        this.userStorage.map(function (entry, index) {
            if (entry.name === id) {
                _this.userStorage[index] = user;
            }
        });
        return user;
    };
    UserService.prototype.deleteUser = function (id) {
        var updatedUser = [];
        this.userStorage.map(function (user) {
            if (user.name !== id) {
                updatedUser.push(user);
            }
        });
        this.userStorage = updatedUser;
        return id;
    };
    UserService = __decorate([
        inversify_1.injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
