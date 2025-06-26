// logger-singleton.ts

class SingletonLogger {
  private static instance: SingletonLogger;
  private name: string = "SingletonLogger";

  private constructor() {
    // private to prevent external instantiation
  }

  static getInstance(): SingletonLogger {
    if (!SingletonLogger.instance) {
      SingletonLogger.instance = new SingletonLogger();
    }
    return SingletonLogger.instance;
  }

  log(message: string): void {
    console.log(`[${this.name}] ${message}`);
  }
}

// Usage
const logger1 = SingletonLogger.getInstance();
const logger2 = SingletonLogger.getInstance();

logger1.log("Hello from logger1.");
logger2.log("Hello from logger2.");

console.log("Are both loggers the same instance?", logger1 === logger2);
