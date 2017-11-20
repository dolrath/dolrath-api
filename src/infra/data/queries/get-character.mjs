import { database } from '../';
import { file } from '../../';
import { mapCharacter, mapPlayer, mapRace } from '../mappings';

export async function getCharacter(name) {
  const command = await file('./src/infra/data/scripts/get-character.cql');
  const params = {
    name: name,
  };

  const data = await database(async session => await session.run(command, params));

  if (!data.records.length) {
    return undefined;
  }

  const record = data.records[0];
  const player = mapPlayer(record);
  const race = mapRace(record);

  return mapCharacter(race, player)(record);
}
