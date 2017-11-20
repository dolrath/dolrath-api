import { database } from '../';
import { file } from '../../';
import { mapCharacter, mapPlayer, mapRace } from '../mappings';

export async function getPlayer(email) {
  const command = await file('./src/infra/data/scripts/get-player.cql');
  const params = {
    email: email,
  };

  const data = await database(async session => await session.run(command, params));

  if (!data.records.length) {
    return undefined;
  }

  return data
    .records
    .reduce((player, record) => {
      if (!player) {
        player = mapPlayer(record);
      }

      const race = mapRace(record);
      const character = mapCharacter(race, player)(record);

      player.addCharacter(character);

      return player;
    }, undefined);
}
