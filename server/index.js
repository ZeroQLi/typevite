import { handler } from '../build/handler.js';

import express from 'express';
import http from "http";
import { Server as SocketIO } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new SocketIO(server, {
    cors: {
        origin: "*",
    },
});