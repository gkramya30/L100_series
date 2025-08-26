export class Logger {
  private logs: string[] = [];

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
