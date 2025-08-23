import { ChatRoom, User } from './ChatRoom';

const chatRoom = new ChatRoom();

const alice = new User("Alice");
const bob = new User("Bob");
const charlie = new User("Charlie");

chatRoom.registerUser(alice);
chatRoom.registerUser(bob);
chatRoom.registerUser(charlie);

alice.send("Bob", "Hi Bob!");
bob.send("Charlie", "Hello Charlie!");
