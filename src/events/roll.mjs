import { Dice } from '../entities';

export function roll(client, io) {
  return function(data) {
    const dice = new Dice(data.dice.value);

    const message = {
      character: {
        name: data.character.name,
      },
      dice: {
        value: dice.value,
        result: dice.result,
      },
    };

    client.emit('dice:rolled', message);
    client.broadcast.to(data.room).emit('dice:rolled', message);
  };
}
