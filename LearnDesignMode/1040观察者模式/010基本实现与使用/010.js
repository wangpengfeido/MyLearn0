class ObserverList {
  constructor() {
    this.observerList = []
  }

  add(obj) {
    this.observerList.push(obj);
  }

  empty() {
    this.observerList = [];
  }

  count() {
    return this.observerList.length;
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }

  insert(obj, index) {
    this.observerList.splice(index, 0, obj);
    return index;
  }

  indexOf(obj, startIndex) {
    let i = startIndex, pointer = -1;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        pointer = i;
      }
      i++;
    }

    return pointer;
  }

  removeIndexAt(index) {
    this.observerList.splice(index, 1);
  }
}

// Subject
// 维持一系列observer
class Subject {
  constructor() {
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeIndexAt(this.observers.indexOf(observer));
  }

  notify(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

// Observer
// 状态发生变化时被通知
class Observer {
  update(context) {
  }
}


// 下面是具体的使用 ///////////////////////////////////////////////////////////////////////
class Government extends Subject {
  constructor() {
    super();
    this.tax = 100;
  }

  changeTax(newTax) {
    this.tax = newTax;
    this.notify(this);
  }
}

class Citizen extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(context) {
    console.log(`${this.name}:oh, the tax is ${context.tax}`);
  }
}

// 具体主体
const empire = new Government();

// 具体观察者
const tom = new Citizen('tom');
empire.addObserver(tom);

const jerry = new Citizen('jerry');
empire.addObserver(jerry);

empire.changeTax(200);

