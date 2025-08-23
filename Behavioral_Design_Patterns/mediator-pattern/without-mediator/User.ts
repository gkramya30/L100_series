export class User {
  name: string;
  private contacts: Map<string, User>;

  constructor(name: string) {
    this.name = name;
    this.contacts = new Map();
  }

  addContact(user: User) {
    this.contacts.set(user.name, user);
  }

  send(receiverName: string, message: string) {
    const receiver = this.contacts.get(receiverName);
    if (receiver) {
      receiver.receive(this.name, message);
    }
  }

  receive(sender: string, message: string) {
    console.log(`${this.name} received a message from ${sender}: ${message}`);
  }
}
