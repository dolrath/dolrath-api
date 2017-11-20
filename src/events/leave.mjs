import { getRooms } from '../infra/socket';

export function leave(client, io) {
  return async function () {
    const rooms = await getRooms(client, io);

    rooms
      .forEach(room => {
        room.removeClient(client.id);

        const message = {
          clients: room.clients,
        };

        client.broadcast.to(room.name).emit('room:left', message);
      });
  }
}
