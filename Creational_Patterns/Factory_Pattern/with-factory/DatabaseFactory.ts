import { Database } from "./interfaces/Database";
import { MySQL } from "./databases/MySQL";
import { PostgreSQL } from "./databases/PostgreSQL";
import { MongoDB } from "./databases/MongoDB";
import { Oracle } from "./databases/Oracle";
import { SQLite } from "./databases/SQLite";

export type DBType = "mysql" | "postgresql" | "mongodb" | "oracle" | "sqlite";

export class DatabaseFactory {
  static getDatabase(type: DBType): Database {
    switch (type) {
      case "mysql": return new MySQL();
      case "postgresql": return new PostgreSQL();
      case "mongodb": return new MongoDB();
      case "oracle": return new Oracle();
      case "sqlite": return new SQLite();
      default: throw new Error(`Unknown Database type: ${type}`);
    }
  }
}
