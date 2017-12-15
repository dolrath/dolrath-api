import { Rooms } from '.';

export class Room {
  constructor(name, characters) {
    this.name = name;
    this.characters = characters || [];;
  }

  removeCharacter(client) {
    const name = Rooms.get(this.name, client);
    const character = this.characters.find(character => character.name == name);

    if (!character) {
      return;
    }

    const index = this.characters.indexOf(character);
    if (index > -1) {
      this.characters.splice(index, 1);
    }
  }
}
