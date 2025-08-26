import { DatabaseFactory } from "./DatabaseFactory";

const dbs = [
  DatabaseFactory.getDatabase("mysql"),
  DatabaseFactory.getDatabase("postgresql"),
  DatabaseFactory.getDatabase("mongodb"),
  DatabaseFactory.getDatabase("oracle"),
  DatabaseFactory.getDatabase("sqlite"),
];

// Mock data for testing
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
