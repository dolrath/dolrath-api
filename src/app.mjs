import pkg from '../package.json';
import express from 'express';
import http from 'http';
import socket from 'socket.io';

import { join, leave, roll } from './events';

const app = express();
const server = http.Server(app);
const io = socket(server);

app.get('/', (req, res) => res.json({
  name: pkg.name,
  version: pkg.version,
  message: 'I\'m working...',
}));

io
  .of('/fights')
  .on('connection', client => {
    client.on('room:join', join(client, io));
    client.on('dice:roll', roll(client, io));
    client.on('disconnecting', leave(client, io));
  });

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`started on port ${port}`));
