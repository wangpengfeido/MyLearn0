class CoffeeOrderContext {
  tableNumber: number;

  constructor(tableNumber: number) {
    this.tableNumber = tableNumber;
  }

  getTable() {
    return this.tableNumber;
  }
}

interface CoffeeOrder {
  serveCoffee: (context: CoffeeOrderContext) => void,
  getFlavor: () => string
}

class CoffeeFlavor implements CoffeeOrder {
  flavor: string;

  constructor(flavor: string) {
    this.flavor = flavor;
  }

  getFlavor() {
    return this.flavor;
  }

  serveCoffee(context: CoffeeOrderContext) {
    console.log(`Serving coffee flavor ${this.flavor} to table ${context.getTable()}`)
  }
}

class CoffeeFlavorFactory {
  flavors: CoffeeOrder[] = [];

  getCoffeeFlavor(flavorName: string) {
    let flavor = this.flavors[flavorName];
    if (!flavor) {
      flavor = new CoffeeFlavor(flavorName);
      this.flavors.push(flavor);
    }
    return flavor;
  }

  getTotalCoffeeFlavorsMade() {
    return this.flavors.length;
  }
}

// test /////////////////////////////////////////////////////////////////////////
let flavors: Array<CoffeeFlavor> = [];
let tables: Array<CoffeeOrderContext> = [];
let ordersMade = 0;

const coffeeFlavorFactory = new CoffeeFlavorFactory();

function takeOrders(flavorIn: string, table: number) {
  flavors[ordersMade] = coffeeFlavorFactory.getCoffeeFlavor(flavorIn);
  tables[ordersMade++] = new CoffeeOrderContext(table);
}

takeOrders('Cappuccino', 2);
takeOrders('Frappe', 1);
takeOrders('Frappe', 43);

for (let i = 0; i < ordersMade; i++) {
  flavors[i].serveCoffee(tables[i]);
}


