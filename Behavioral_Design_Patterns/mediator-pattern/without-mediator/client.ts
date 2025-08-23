import { User } from './User';

const alice = new User("Alice");
const bob = new User("Bob");
const charlie = new User("Charlie");

alice.addContact(bob);
bob.addContact(charlie);
charlie.addContact(alice);

alice.send("Bob", "Hi Bob!");
bob.send("Charlie", "Hello Charlie!");
