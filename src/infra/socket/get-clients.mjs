export function getClients(room, io) {
  return new Promise((resolve, reject) => {
    io.of('/fights').in(room).clients((err, clients) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(clients);
    });
  });
}
