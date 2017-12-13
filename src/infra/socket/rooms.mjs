global.rooms = {};

export class Rooms {
  static add(room, client, character) {
    if (!global.rooms[room]) {
      global.rooms[room] = {};
    }

    global.rooms[room][client] = character;
  }

  static get(room, client) {
    if (!global.rooms[room]) {
      return [];
    }

    return global.rooms[room][client];
  }
}
