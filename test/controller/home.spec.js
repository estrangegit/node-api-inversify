"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var home_1 = require("../../controller/home");
describe('HomeController', function () {
    it('should give back `Home sweet home`', function () {
        var service = new home_1.HomeController();
        chai_1.expect(service.get()).to.equal('Home sweet home');
    });
});
