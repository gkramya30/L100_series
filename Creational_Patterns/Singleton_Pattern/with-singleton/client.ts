import { Logger } from "./Logger";

function serviceOne() {
  const logger = Logger.getInstance();
  logger.log("ServiceOne: Performing some task...");
}

function serviceTwo() {
  const logger = Logger.getInstance();
  logger.log("ServiceTwo: Executing another operation...");
}

function serviceThree() {
  const logger = Logger.getInstance();
  logger.log("ServiceThree: Handling a request...");
}

// All services use the SAME instance
serviceOne();
serviceTwo();
serviceThree();

// Show complete log history
const logger = Logger.getInstance();
logger.showLogs();
