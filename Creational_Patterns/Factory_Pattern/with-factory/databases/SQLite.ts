import { Database } from "../interfaces/Database";

export class SQLite implements Database {
  connect(): void {
    console.log("✅ Connected to SQLite (local file-based DB)");
  }

  disconnect(): void {
    console.log("❌ Disconnected from SQLite");
  }

  query(query: string): void {
    console.log(`📄 SQLite running query: ${query}`);
  }

  insert(table: string, data: object): void {
    console.log(`➕ SQLite inserting into ${table}:`, data);
  }

  update(table: string, id: number, data: object): void {
    console.log(`✏️ SQLite updating ${table} where id=${id}:`, data);
  }

  delete(table: string, id: number): void {
    console.log(`🗑️ SQLite deleting from ${table} where id=${id}`);
  }

  beginTransaction(): void {
    console.log("🔄 SQLite Transaction started");
  }

  commit(): void {
    console.log("✅ SQLite Transaction committed");
  }

  rollback(): void {
    console.log("⚠️ SQLite Transaction rolled back");
  }
}
