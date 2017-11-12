export class Room {
  constructor(name, players) {
    players = players || [];

    this.name = name;
    this.players = players;
  }

  removePlayer(id) {
    const player = this.players.find(player => player.id == id);
    if (!player) {
      return;
    }

    const index = this.players.indexOf(player);
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }
}
