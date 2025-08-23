import { SupportTicket } from './Ticket';

export class SupportService {
  handle(ticket: SupportTicket) {
    if (ticket.level <= 1) {
      console.log(`Level 1 Support handled ticket: ${ticket.description}`);
    } else if (ticket.level <= 2) {
      console.log(`Level 2 Support handled ticket: ${ticket.description}`);
    } else if (ticket.level <= 3) {
      console.log(`Manager handled ticket: ${ticket.description}`);
    } else {
      console.log(`Director handled ticket: ${ticket.description}`);
    }
  }
}
