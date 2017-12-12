import { database } from '../';
import { file } from '../../';
import { mapCharacter, mapPlayer, mapRace } from '../mappings';

export async function getCharacters(email) {
  const command = await file('./src/infra/data/scripts/get-characters.cql');
  const params = {
    email: email,
  };

  const data = await database(async session => await session.run(command, params));

  if (!data.records.length) {
    return [];
  }

  return data
    .records
    .map(record => {
      const player = mapPlayer(record);
      const race = mapRace(record);

      return mapCharacter(race, player)(record);
    });
}
