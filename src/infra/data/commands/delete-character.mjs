import { database } from '../';
import { file } from '../../';

export async function deleteCharacter(name) {
  const command = await file('./src/infra/data/scripts/delete-character.cql');
  const params = {
    name: name,
  };

  await database(async session => await session.run(command, params));
}
