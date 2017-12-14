import { getClients, Rooms } from '../infra/socket';

export function join(client, io) {
  return async function (data) {
    client.join(data.room);

    Rooms.add(data.room, client.id, data.character.name);
    const clients = await getClients(data.room, io);

    const message = {
      clients: clients,
    };

    client.emit('room:joined', message);
    client.broadcast.to(data.room).emit('room:joined', message);
  }
}
