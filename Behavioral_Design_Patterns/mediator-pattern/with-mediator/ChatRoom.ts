export interface IChatRoom {
  sendMessage(sender: User, receiverName: string, message: string): void;
  registerUser(user: User): void;
}

export class User {
  name: string;
  private chatRoom?: IChatRoom;

  constructor(name: string) {
    this.name = name;
  }

  setChatRoom(chatRoom: IChatRoom) {
    this.chatRoom = chatRoom;
  }

  send(receiverName: string, message: string) {
    if (this.chatRoom) {
      this.chatRoom.sendMessage(this, receiverName, message);
    }
  }

  receive(sender: string, message: string) {
    console.log(`${this.name} received a message from ${sender}: ${message}`);
  }
}

export class ChatRoom implements IChatRoom {
  private users: Map<string, User> = new Map();

  registerUser(user: User): void {
    this.users.set(user.name, user);
    user.setChatRoom(this);
  }

  sendMessage(sender: User, receiverName: string, message: string): void {
    const receiver = this.users.get(receiverName);
    if (receiver) {
      receiver.receive(sender.name, message);
    }
  }
}
