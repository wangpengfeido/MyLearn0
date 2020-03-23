// CoffeeFlavour 实例针对同一个name不会重复创建
// 相同的flavour在order中是共享的


class CoffeeFlavour {
  name;
  static CACHE = new Map();

  constructor(name) {
    this.name = name;
  }

  toString() {
    return this.name;
  }

  static intern(name) {
    const coffeeFlavour = CoffeeFlavour.CACHE.get(name);
    if (!coffeeFlavour) {
      CoffeeFlavour.CACHE.set(name, new CoffeeFlavour(name));
    }
    return coffeeFlavour;
  }

  static flavoursInCache() {
    return CoffeeFlavour.CACHE.size;
  }
}

class Order {

  constructor(serve) {
    this.serve = serve;
  }

  static of(flavourName, tableNumber) {
    const flavour = CoffeeFlavour.intern(flavourName);
    return new Order(() => console.log(`serving ${flavour} to table ${tableNumber}`));
  };
}

class CoffeeShop {
  constructor() {
    this.orders = [];
  }

  takeOrder(flavour, tableNumber) {
    this.orders.push(Order.of(flavour, tableNumber));
  }

  service() {
    this.orders.forEach(order => order.serve());
  }
}

// test ///////////////////////////////////////////////////
const coffeeShop = new CoffeeShop();
coffeeShop.takeOrder('Cappuccino', 2);
coffeeShop.takeOrder('Frappe', 1);
coffeeShop.takeOrder('Frappe', 43);
coffeeShop.service();

