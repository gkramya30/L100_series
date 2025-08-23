import { CsvProcessor } from "./CsvProcessor";
import { JsonProcessor } from "./JsonProcessor";

const csv = new CsvProcessor();
csv.process();

console.log("---");

const json = new JsonProcessor();
json.process();
