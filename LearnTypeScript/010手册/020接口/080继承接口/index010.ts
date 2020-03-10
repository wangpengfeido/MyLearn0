interface Animal {
  name: string;
  breathe(): void;
}

interface Runnable {
  run(): void;
}

// 接口可以继承，并且可以多继承
interface Dog extends Animal, Runnable {
  breed: string
}

