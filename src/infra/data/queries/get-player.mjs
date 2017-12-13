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

  const record = data.records[0];
  return mapPlayer(record);
}
