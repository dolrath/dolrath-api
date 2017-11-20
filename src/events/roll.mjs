import { Dice, Player } from '../entities';

export function roll(client, io) {
  return function(data) {
    const player = new Player(data.player.email);
    const dice = new Dice(data.dice.value);

    const message = {
      player: player,
      dice: dice,
    };

    client.emit('dice:rolled', message);
    client.broadcast.to(data.room).emit('dice:rolled', message);
  };
}
