import fs from 'fs';

export function file(path) {
  return new Promise(async (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, body) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(body.trim());
    });
  });
}
