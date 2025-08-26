export class Logger {
  private static instance: Logger; // holds the single instance
  private logs: string[] = [];

  // Private constructor prevents instantiation from outside
  private constructor() {}

  // Global access point
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
    console.log(`[${timestamp}] ${message}`);
  }

  showLogs(): void {
    console.log("\n--- Log History ---");
    this.logs.forEach((log) => console.log(log));
  }
}
