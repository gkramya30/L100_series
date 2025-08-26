import { MySQL } from "./databases/MySQL";
import { PostgreSQL } from "./databases/PostgreSQL";
import { MongoDB } from "./databases/MongoDB";
import { Oracle } from "./databases/Oracle";
import { SQLite } from "./databases/SQLite";

// Instead of Factory — directly instantiate DBs
const dbs = [
  new MySQL(),
  new PostgreSQL(),
  new MongoDB(),
  new Oracle(),
  new SQLite()
];

// Mock data
const userData = { name: "Alice", email: "alice@example.com" };
const updateData = { email: "alice_updated@example.com" };

for (const db of dbs) {
  console.log("------------------------------------------------");
  db.connect();

  db.beginTransaction();

  db.insert("users", userData);
  db.query("SELECT * FROM users");
  db.update("users", 1, updateData);
  db.delete("users", 2);

  db.commit();

  db.disconnect();
}
