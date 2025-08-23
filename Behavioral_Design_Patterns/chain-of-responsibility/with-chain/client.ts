import {
  Level1Support,
  Level2Support,
  ManagerSupport,
  DirectorSupport,
} from './SupportHandler';
import { SupportTicket } from './Ticket';

const level1 = new Level1Support();
const level2 = new Level2Support();
const manager = new ManagerSupport();
const director = new DirectorSupport();

// Setup chain
level1.setNext(level2).setNext(manager).setNext(director);

// Example tickets
const ticket1 = new SupportTicket("Password reset", 1);
const ticket2 = new SupportTicket("App not loading", 2);
const ticket3 = new SupportTicket("Critical security issue", 4);

level1.handle(ticket1);
level1.handle(ticket2);
level1.handle(ticket3);
