import { Room } from '.';
import { getClients } from './get-clients';

export function getRooms(client, io) {
  return new Promise(async (resolve, reject) => {
    const rooms = await Promise.all(Object
      .keys(client.rooms)
      .map(async room => {
        const clients = await getClients(room, io);
        return new Room(room, clients);
      }));

    resolve(rooms);
  });
}
