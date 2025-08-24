import { Visitor } from "./Visitor";

export interface Item {
  accept(visitor: Visitor): void;
}

export class Book implements Item {
  constructor(public title: string, public price: number) {}

  accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }
}

export class Electronics implements Item {
  constructor(public name: string, public price: number) {}

  accept(visitor: Visitor): void {
    visitor.visitElectronics(this);
  }
}
