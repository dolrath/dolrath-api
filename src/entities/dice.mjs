export class Dice {
  constructor(value) {
    this.value = value;
    this.result = Math.round(Math.random() * this.value);
  }
}
