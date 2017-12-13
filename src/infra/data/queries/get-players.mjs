import { database } from '../';
import { file } from '../../';
import { mapPlayer } from '../mappings';

export async function getPlayers(email) {
  const command = await file('./src/infra/data/scripts/get-players.cql');

  const data = await database(async session => await session.run(command));

  if (!data.records.length) {
    return [];
  }

  return data
    .records
    .map(record => mapPlayer(record));
}
