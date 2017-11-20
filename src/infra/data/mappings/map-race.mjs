import { Race } from '../../../entities';

export function mapRace(record) {
  return new Race(record.get('race'));
}
