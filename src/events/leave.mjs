import { getRooms } from '../infra/socket';

export function leave(client, io) {
  return async function () {
    const rooms = await getRooms(client, io);

    rooms
      .forEach(room => {
        room.removeCharacter(client.id);

        const message = {
          characters: room.characters,
        };

        client.broadcast.to(room.name).emit('room:left', message);
      });
  }
}
