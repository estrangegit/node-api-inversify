"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var bodyParser = require("body-parser");
var types_1 = require("./constant/types");
var user_1 = require("./service/user");
require("./controller/home");
require("./controller/user");
// load everything needed to the Container
var container = new inversify_1.Container();
container.bind(types_1.default.UserService).to(user_1.UserService);
// start the server
var server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig(function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});
var serverInstance = server.build();
serverInstance.listen(3000);
console.log('Server started on port 3000 :)');
