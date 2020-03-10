class MacBook {
  getPrice() {
    return 100;
  }
}

function addRam(macBook) {
  const oldPrice = macBook.getPrice();
  macBook.getPrice = function () {
    return oldPrice + 10;
  }

}

const myMacBook = new MacBook();
addRam(myMacBook);
console.log(myMacBook.getPrice());
