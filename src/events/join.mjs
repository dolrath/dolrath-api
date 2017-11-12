import { Player, Room } from '../entities';
import { getPlayers } from '../get-players';

export function join(client, io) {
  return async function (room) {
    client.join(room);

    const players = await getPlayers(room, io);
    const message = {
      player: new Player(client.id, room),
      room: new Room(room, players),
    };

    client.emit('room:joined', message);
    client.broadcast.to(room).emit('room:joined', message);
  }
}
