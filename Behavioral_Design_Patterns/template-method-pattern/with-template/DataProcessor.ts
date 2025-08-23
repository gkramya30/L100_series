export abstract class DataProcessor {
  public process(): void {
    this.loadFile();
    const data = this.parseFile();
    const transformed = this.transformData(data);
    this.saveResults(transformed);
  }

  protected abstract loadFile(): void;
  protected abstract parseFile(): any;
  protected abstract transformData(data: any): any;
  protected abstract saveResults(data: any): void;
}
