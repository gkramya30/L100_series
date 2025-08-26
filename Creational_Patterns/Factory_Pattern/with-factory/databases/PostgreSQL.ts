import { Database } from "../interfaces/Database";

export class PostgreSQL implements Database {
  connect(): void {
    console.log("✅ Connected to PostgreSQL Database");
  }

  disconnect(): void {
    console.log("❌ Disconnected from PostgreSQL Database");
  }

  query(query: string): void {
    console.log(`📄 PostgreSQL running query: ${query}`);
  }

  insert(table: string, data: object): void {
    console.log(`➕ PostgreSQL inserting into ${table}:`, data);
  }

  update(table: string, id: number, data: object): void {
    console.log(`✏️ PostgreSQL updating ${table} where id=${id}:`, data);
  }

  delete(table: string, id: number): void {
    console.log(`🗑️ PostgreSQL deleting from ${table} where id=${id}`);
  }

  beginTransaction(): void {
    console.log("🔄 PostgreSQL Transaction started");
  }

  commit(): void {
    console.log("✅ PostgreSQL Transaction committed");
  }

  rollback(): void {
    console.log("⚠️ PostgreSQL Transaction rolled back");
  }
}
