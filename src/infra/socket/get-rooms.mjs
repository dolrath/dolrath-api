import { getCharacters, Room } from '.';

export function getRooms(client, io) {
  return new Promise(async (resolve, reject) => {
    const rooms = await Promise.all(Object
      .keys(client.rooms)
      .map(async room => {
        const characters = await getCharacters(room, io);
        return new Room(room, characters);
      }));

    resolve(rooms);
  });
}
