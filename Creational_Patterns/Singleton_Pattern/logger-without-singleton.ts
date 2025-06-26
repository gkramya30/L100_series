// logger-without-singleton.ts

class Logger {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  log(message: string): void {
    console.log(`[${this.name}] ${message}`);
  }
}

// Each time a new logger is created
const loggerA = new Logger("LoggerA");
const loggerB = new Logger("LoggerB");

loggerA.log("This is from A.");
loggerB.log("This is from B.");
