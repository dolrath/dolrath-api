import express from 'express';
import http from 'http';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import cors from 'cors';

import { join, leave, roll } from './events';
import { home, characters, players } from './routes';

const app = express();
const server = http.Server(app);
const io = socket(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/', home());
app.use('/characters', characters());
app.use('/players', players());

app.options("/*", function(req, res, next){
  res.send(200);
});

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    err: err.message,
  });
});

io
  .of('/fights')
  .on('connection', client => {
    client.on('room:join', join(client, io));
    client.on('dice:roll', roll(client, io));
    client.on('disconnecting', leave(client, io));
  });

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`started on port ${port}`));
