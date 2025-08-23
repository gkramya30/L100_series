import { DataProcessor } from "./DataProcessor";

export class CsvProcessor extends DataProcessor {
  protected loadFile(): void {
    console.log("Loading CSV file...");
  }

  protected parseFile(): string[] {
    console.log("Parsing CSV...");
    return ["John,30", "Jane,25"];
  }

  protected transformData(data: string[]): object[] {
    console.log("Transforming CSV...");
    return data.map(row => {
      const [name, age] = row.split(",");
      return { name, age: Number(age) };
    });
  }

  protected saveResults(data: object[]): void {
    console.log("Saving CSV results:", data);
  }
}
