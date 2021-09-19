"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const user_1 = require("./resolvers/user");
const User_1 = require("./entities/User");
const cors_1 = __importDefault(require("cors"));
const Post_1 = require("./entities/Post");
const post_1 = require("./resolvers/post");
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "password",
        database: "blogapp",
        entities: [User_1.User, Post_1.Post],
        synchronize: true,
    });
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver, post_1.PostResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log("server started on 4000");
    });
};
main();
//# sourceMappingURL=index.js.map