

module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.clients.set(client.username, client);
    }

    getAllClients() {
        return [...this.clients.values()];
    }

    getClient(username) {
        return this.clients.get(username);
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }

    rename(username, newusername) {
        client.username = client.newusername;
        this.clients.set(client.newusername, client);
    }
};