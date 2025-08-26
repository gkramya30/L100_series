import { Database } from "../interfaces/Database";

export class Oracle implements Database {
  connect(): void {
    console.log("✅ Connected to Oracle Database");
  }

  disconnect(): void {
    console.log("❌ Disconnected from Oracle Database");
  }

  query(query: string): void {
    console.log(`📄 Oracle executing SQL: ${query}`);
  }

  insert(table: string, data: object): void {
    console.log(`➕ Oracle inserting into ${table}:`, data);
  }

  update(table: string, id: number, data: object): void {
    console.log(`✏️ Oracle updating ${table} where id=${id}:`, data);
  }

  delete(table: string, id: number): void {
    console.log(`🗑️ Oracle deleting from ${table} where id=${id}`);
  }

  beginTransaction(): void {
    console.log("🔄 Oracle Transaction started");
  }

  commit(): void {
    console.log("✅ Oracle Transaction committed");
  }

  rollback(): void {
    console.log("⚠️ Oracle Transaction rolled back");
  }
}
