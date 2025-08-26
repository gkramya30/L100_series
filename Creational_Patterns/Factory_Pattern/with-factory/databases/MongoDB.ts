import { Database } from "../interfaces/Database";

export class MongoDB implements Database {
  connect(): void {
    console.log("✅ Connected to MongoDB");
  }

  disconnect(): void {
    console.log("❌ Disconnected from MongoDB");
  }

  query(query: string): void {
    console.log(`📄 MongoDB running find operation with filter: { ${query} }`);
  }

  insert(table: string, data: object): void {
    console.log(`➕ MongoDB inserting document into ${table}:`, data);
  }

  update(table: string, id: number, data: object): void {
    console.log(`✏️ MongoDB updating ${table} document with _id=${id}:`, data);
  }

  delete(table: string, id: number): void {
    console.log(`🗑️ MongoDB deleting document from ${table} with _id=${id}`);
  }

  beginTransaction(): void {
    console.log("🔄 MongoDB Session transaction started");
  }

  commit(): void {
    console.log("✅ MongoDB Transaction committed");
  }

  rollback(): void {
    console.log("⚠️ MongoDB Transaction rolled back");
  }
}
