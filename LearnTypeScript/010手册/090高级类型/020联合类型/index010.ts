class Fish {
  breath() {
    console.log("breath...");
  }
  swim() {
    console.log("swim.....");
  }
}

class Bird {
  breath() {
    console.log("breath...");
  }
  fly() {
    console.log("fly.....");
  }
}

// 联合类型表示包含两种类型共有的类型，可理解为 两种类型皆可
// 联合类型对象在调用时只能调用共有的成员

function doSth(someBody: Fish | Bird) {
  someBody.breath();

  // 只能调用共有成员，不能调用仅属于一个类型的成员
  // someBody.swim();
}

let tom = new Fish();
let sam = new Bird();
doSth(tom);
doSth(sam);
