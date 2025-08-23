export class CsvProcessor {
  public process(): void {
    console.log("Loading CSV file...");
    console.log("Parsing CSV...");
    const data = ["John,30", "Jane,25"];
    console.log("Transforming CSV...");
    const transformed = data.map(row => {
      const [name, age] = row.split(",");
      return { name, age: Number(age) };
    });
    console.log("Saving CSV results:", transformed);
  }
}
