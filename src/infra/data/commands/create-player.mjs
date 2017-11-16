import { database } from '../';
import { file } from '../../';

export async function createPlayer(player) {
  const command = await file('./src/infra/data/scripts/create-player.cql');
  const params = {
    email: player.email,
  };

  await database(async session => await session.run(command, params));

  return player;
}
