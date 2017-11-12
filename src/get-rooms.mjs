import { Room } from './entities';
import { getPlayers } from './get-players';

export function getRooms(client, io) {
  return new Promise(async (resolve, reject) => {
    const rooms = await Promise.all(Object
      .keys(client.rooms)
      .map(async room => {
        const players = await getPlayers(room, io);
        return new Room(room, players);
      }));

    resolve(rooms);
  });
}
