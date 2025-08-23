export class JsonProcessor {
  public process(): void {
    console.log("Loading JSON file...");
    console.log("Parsing JSON...");
    const data = [{ name: "Alice", age: 22 }, { name: "Bob", age: 35 }];
    console.log("Transforming JSON...");
    const transformed = data.map((d: any) => ({ ...d, age: d.age + 1 }));
    console.log("Saving JSON results:", transformed);
  }
}
