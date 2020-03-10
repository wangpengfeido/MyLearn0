function addRamDecorator(target) {
  target.prototype.addRam = function () {
    console.log('ram added');
  };

  const oldGetPrice = target.prototype.getPrice;
  target.prototype.getPrice = function () {
    return oldGetPrice.call(this) + 10;
  }
}

@addRamDecorator
class MacBook {
  getPrice() {
    return 100;
  }
}

const myMacBook = new MacBook();
console.log(myMacBook);


