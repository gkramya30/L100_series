export interface Product {
  category: string;
  price: number;
}

export class Context {
  constructor(public product: Product) {}
}
