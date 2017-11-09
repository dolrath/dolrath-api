import { Player } from './entities';

export function getPlayers(room, io) {
  return new Promise((resolve, reject) => {
    io.of('/fights').in(room).clients((err, clients) => {
      if (err) {
        reject(err);
        return;
      }

      const players = clients.map(client => new Player(client, room));
      resolve(players);
    });
  });
}
