export class Room {
  constructor(name, clients) {
    this.name = name;
    this.clients = clients || [];;
  }

  removeClient(id) {
    const client = this.clients.find(client => client.id == id);
    if (!client) {
      return;
    }

    const index = this.clients.indexOf(client);
    if (index > -1) {
      this.clients.splice(index, 1);
    }
  }
}
