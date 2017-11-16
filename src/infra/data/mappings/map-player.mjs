import { Player } from '../../../entities';

export function mapPlayer(record) {
  return new Player(record.get('email'));
}
