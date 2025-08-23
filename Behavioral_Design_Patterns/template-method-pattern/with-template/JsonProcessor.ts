import { DataProcessor } from "./DataProcessor";

export class JsonProcessor extends DataProcessor {
  protected loadFile(): void {
    console.log("Loading JSON file...");
  }

  protected parseFile(): object[] {
    console.log("Parsing JSON...");
    return [{ name: "Alice", age: 22 }, { name: "Bob", age: 35 }];
  }

  protected transformData(data: object[]): object[] {
    console.log("Transforming JSON...");
    return data.map((d: any) => ({ ...d, age: d.age + 1 }));
  }

  protected saveResults(data: object[]): void {
    console.log("Saving JSON results:", data);
  }
}
