"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SupportHandler_1 = require("./SupportHandler");
var Ticket_1 = require("./Ticket");
var level1 = new SupportHandler_1.Level1Support();
var level2 = new SupportHandler_1.Level2Support();
var manager = new SupportHandler_1.ManagerSupport();
var director = new SupportHandler_1.DirectorSupport();
// Setup chain
level1.setNext(level2).setNext(manager).setNext(director);
// Example tickets
var ticket1 = new Ticket_1.SupportTicket("Password reset", 1);
var ticket2 = new Ticket_1.SupportTicket("App not loading", 2);
var ticket3 = new Ticket_1.SupportTicket("Critical security issue", 4);
level1.handle(ticket1);
level1.handle(ticket2);
level1.handle(ticket3);
