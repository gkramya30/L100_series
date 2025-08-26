import { Logger } from "./Logger";

// Each service creates its own Logger instance
function serviceOne() {
  const logger = new Logger();
  logger.log("ServiceOne: Performing some task...");
  logger.showLogs();
}

function serviceTwo() {
  const logger = new Logger();
  logger.log("ServiceTwo: Executing another operation...");
  logger.showLogs();
}

function serviceThree() {
  const logger = new Logger();
  logger.log("ServiceThree: Handling a request...");
  logger.showLogs();
}

// Call services
serviceOne();
serviceTwo();
serviceThree();
