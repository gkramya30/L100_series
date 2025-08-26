export interface Database {
  connect(): void;
  disconnect(): void;

  query(query: string): void;
  insert(table: string, data: object): void;
  update(table: string, id: number, data: object): void;
  delete(table: string, id: number): void;

  beginTransaction(): void;
  commit(): void;
  rollback(): void;
}
