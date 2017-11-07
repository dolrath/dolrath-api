'use strict';

import pkg from './package.json';
import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const server = http.Server(app);

app.get('/', (req, res) => res.json({
  name: pkg.name,
  version: pkg.version,
  message: 'I\'m working...',
}));

io(server)
  .of('/fights')
  .on('connection', player => {
    player.emit('player:connected', player.id);

    player.on('room:join', room => {
      player.join(room);

      const message = {
        id: player.id,
        room: room,
      };

      player.emit('room:joined', message);
      player.broadcast.to(room).emit('room:joined', message);
    });

    player.on('dice:roll', data => {
      const message = {
        id: player.id,
        room: data.room,
        dice: {
          result: Math.round(Math.random() * data.dice),
        },
      };

      player.emit('dice:rolled', message);
      player.broadcast.to(message.room).emit('dice:rolled', message);
    });

    player.on('disconnecting', () => Object
      .keys(player.rooms)
      .forEach(room => player.broadcast.to(room).emit('room:left', {
        id: player.id,
        room: room,
      })));
  });

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`started on port ${port}`));