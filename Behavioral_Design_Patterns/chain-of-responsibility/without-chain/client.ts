import { SupportService } from './SupportService';
import { SupportTicket } from './Ticket';

const support = new SupportService();

const ticket1 = new SupportTicket("Password reset", 1);
const ticket2 = new SupportTicket("App not loading", 2);
const ticket3 = new SupportTicket("Critical security issue", 4);

support.handle(ticket1);
support.handle(ticket2);
support.handle(ticket3);
