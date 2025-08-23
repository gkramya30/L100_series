import { SupportTicket } from './Ticket';

export abstract class SupportHandler {
  protected nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(ticket: SupportTicket): void {
    if (this.nextHandler) {
      this.nextHandler.handle(ticket);
    } else {
      console.log(`No handler could process the ticket.`);
    }
  }
}

export class Level1Support extends SupportHandler {
  handle(ticket: SupportTicket): void {
    if (ticket.level <= 1) {
      console.log(`Level 1 Support handled ticket: ${ticket.description}`);
    } else {
      console.log(`Level 1 Support escalated ticket.`);
      super.handle(ticket);
    }
  }
}

export class Level2Support extends SupportHandler {
  handle(ticket: SupportTicket): void {
    if (ticket.level <= 2) {
      console.log(`Level 2 Support handled ticket: ${ticket.description}`);
    } else {
      console.log(`Level 2 Support escalated ticket.`);
      super.handle(ticket);
    }
  }
}

export class ManagerSupport extends SupportHandler {
  handle(ticket: SupportTicket): void {
    if (ticket.level <= 3) {
      console.log(`Manager handled ticket: ${ticket.description}`);
    } else {
      console.log(`Manager escalated ticket.`);
      super.handle(ticket);
    }
  }
}

export class DirectorSupport extends SupportHandler {
  handle(ticket: SupportTicket): void {
    console.log(`Director handled ticket: ${ticket.description}`);
  }
}
