import { getClients } from '../infra/socket';

export function join(client, io) {
  return async function (data) {
    client.join(data.room);

    const clients = await getClients(data.room, io);

    const message = {
      clients: clients,
    };

    client.emit('room:joined', message);
    client.broadcast.to(data.room).emit('room:joined', message);
  }
}
