import { Dice, Player } from '../entities';

export function roll(client, io) {
  return function(dice) {
    const message = {
      player: new Player(client.id, dice.player.room),
      dice: new Dice(dice.value),
    };

    client.emit('dice:rolled', message);
    client.broadcast.to(message.player.room).emit('dice:rolled', message);
  };
}
