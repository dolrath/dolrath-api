import { Character } from '../../../entities';

export function mapCharacter(race, player) {
  return record => {
    const characterPlayer = {
      email: player.email,
    };

    return new Character(record.get('name'), race, characterPlayer)
      .update({
        level: record.get('level'),
        hitPoint: {
          actual: record.get('hitPointActual'),
          total: record.get('hitPointTotal')
        },
        mana: {
          actual: record.get('manaActual'),
          total: record.get('manaTotal')
        },
        attr: {
          total: record.get('attrTotal'),
          values: {
            def: record.get('attrValuesDef'),
            dex: record.get('attrValuesDex'),
            int: record.get('attrValuesInt'),
            spd: record.get('attrValuesSpd'),
            str: record.get('attrValuesStr'),
            vit: record.get('attrValuesVit'),
          },
        },
      });
  };
}
