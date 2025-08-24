import { Context } from "./Context";

// Abstract expression
export interface Expression {
  interpret(context: Context): boolean;
}

// Terminal expressions
export class CategoryExpression implements Expression {
  constructor(private category: string) {}

  interpret(context: Context): boolean {
    return context.product.category === this.category;
  }
}

export class PriceLessThanExpression implements Expression {
  constructor(private price: number) {}

  interpret(context: Context): boolean {
    return context.product.price < this.price;
  }
}

// Non-terminal expressions (AND, OR)
export class AndExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}

export class OrExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}
