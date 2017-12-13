import { database } from '../';
import { file } from '../../';

export async function deletePlayer(email) {
  const command = await file('./src/infra/data/scripts/delete-player.cql');
  const params = {
    email: email,
  };

  await database(async session => await session.run(command, params));
}
