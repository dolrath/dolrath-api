import { getRooms } from '../get-rooms';

export function leave(client, io) {
  return async function () {
    const rooms = await getRooms(client, io);

    rooms
      .forEach(room => {
        room.removePlayer(client.id);

        const message = {
          room: room,
        };

        client.broadcast.to(room.name).emit('room:left', message);
      });
  }
}
