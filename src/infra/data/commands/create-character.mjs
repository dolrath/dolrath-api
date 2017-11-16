import { database } from '../';
import { file } from '../../';

export async function createCharacter(character) {
  const command = await file('./src/infra/data/scripts/create-character.cql');
  const params = {
    name: character.name,
    race: character.race.name,
    email: character.player.email,
    level: character.level,
    hitPointActual: character.hitPoint.actual,
    hitPointTotal: character.hitPoint.total,
    manaActual: character.mana.actual,
    manaTotal: character.mana.total,
    attrTotal: character.attr.total,
    attrValuesDef: character.attr.values.def,
    attrValuesDex: character.attr.values.dex,
    attrValuesInt: character.attr.values.int,
    attrValuesSpd: character.attr.values.spd,
    attrValuesStr: character.attr.values.str,
    attrValuesVit: character.attr.values.vit,
  };

  await database(async session => await session.run(command, params));

  return character;
}
