import { Rooms } from '.';

export function getCharacters(room, io) {
  return new Promise((resolve, reject) => {
    io.of('/fights').in(room).clients((err, clients) => {
      if (err) {
        reject(err);
        return;
      }

      const characters = clients.map(client => Rooms.get(room, client));

      resolve(characters);
    });
  });
}
