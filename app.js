'use strict';

let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('roll', dice => {
    const message = Math.round(Math.random() * dice);

    io.emit('roll', message);    
  });
});

server.listen(8080, () => console.log('started on port 8080'));