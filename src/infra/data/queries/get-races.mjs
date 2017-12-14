import { database } from '../';
import { file } from '../../';
import { mapRace } from '../mappings';

export async function getRaces() {
  const command = await file('./src/infra/data/scripts/get-races.cql');

  const data = await database(async session => await session.run(command));

  if (!data.records.length) {
    return [];
  }

  return data
    .records
    .map(record => mapRace(record));
}
