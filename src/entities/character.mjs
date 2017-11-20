export class Character {
  constructor(name, race, player) {
    this.name = name;
    this.race = race;
    this.player = player;

    this.level = 1;
    this.attr = {
      total: 12,
      values: {
        def: 0,
        dex: 0,
        int: 0,
        spd: 0,
        str: 0,
        vit: 0,
      }
    }

    const hitPoint = this.attr.values.vit * 10 + 10;
    this.hitPoint = {
      actual: hitPoint,
      total: hitPoint,
    };

    const mana = this.attr.values.int * 2 + 2;
    this.mana = {
      actual: mana,
      total: mana,
    };
  }

  update(properties) {
    this.level = properties.level;

    this.attr = properties.attr;

    this.hitPoint = properties.hitPoint;
    this.mana = properties.mana;

    return this;
  }
}
