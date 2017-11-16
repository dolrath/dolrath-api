export class Player {
  constructor(email, characters) {
    this.email = email;
    this.characters = characters || [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }
}
