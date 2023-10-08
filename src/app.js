import express, { request, response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import user from "./user.js";
import token from "./token.js";

dotenv.config();

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.post("/", (request, response) => {
    const { registration: login } = request.body;
    const nameUser = login.name;
    const password = login.password;
    if (nameUser === user.name && password === user.password) {
        response.send(JSON.stringify(token));
    } else {
        response.send(404);
    }
});

server.listen(process.env.PORT);
