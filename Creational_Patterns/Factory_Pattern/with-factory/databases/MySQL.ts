import { Database } from "../interfaces/Database";

export class MySQL implements Database {
  connect(): void {
    console.log("Connected to MySQL Database");
  }

  disconnect(): void {
    console.log("Disconnected from MySQL Database");
  }

  query(query: string): void {
    console.log(`MySQL executing query: ${query}`);
  }

  insert(table: string, data: object): void {
    console.log(`MySQL inserting into ${table}:`, data);
  }

  update(table: string, id: number, data: object): void {
    console.log(`MySQL updating ${table} where id=${id}:`, data);
  }

  delete(table: string, id: number): void {
    console.log(`MySQL deleting from ${table} where id=${id}`);
  }

  beginTransaction(): void {
    console.log("MySQL Transaction started");
  }

  commit(): void {
    console.log("MySQL Transaction committed");
  }

  rollback(): void {
    console.log("MySQL Transaction rolled back");
  }
}
