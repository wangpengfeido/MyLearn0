interface MacBook {
  addEngraving: Function,
  addRam: Function,
  addSoftware: Function
}

class MacBookPro implements MacBook {
  addEngraving() {
  }

  addRam() {
  }

  addSoftware() {
  }

  getPrice() {
    return 100;
  }
}

class MacBookDecorator {
  macBook: MacBook;

  constructor(macBook: MacBook) {
    this.macBook = macBook;
  }

  addEngraving() {
    return this.macBook.addEngraving();
  }

  addRam() {
    return this.macBook.addRam();
  }

  addSoftware() {
    return this.macBook.addSoftware();
  }
}

class RamDecorator extends MacBookDecorator {
  constructor(macBook: MacBook) {
    super(macBook);
  }

  addRam() {
    return this.macBook.addRam() + 'ram added';
  }

  getPrice() {
    return (this.macBook as any).getPrice() + 10;
  }
}

const myMacBookPro=new RamDecorator(new MacBookPro());
console.log(myMacBookPro.getPrice());
