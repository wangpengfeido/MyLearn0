namespace N010030020010 {
    class Animal {
        constructor(name: string) {
            this.name = name;
        }

        name: string;

        move(distance: number = 5) {
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

    //继承
    class Snake extends Animal {
        constructor(name: string) {
            //必须调用父类的构造方法
            super(name);
        }

        //重写父类的move方法
        move(distance = 10) {
            console.log('snake is moving');
            //调用父类的move方法
            super.move(distance);
        }
    }

    let tom = new Snake('tome');
    tom.move();
    //子类对象可以赋给父类对象
    let sam: Animal = new Snake('sam');
    //此时调用的仍然是子类的重写后的方法
    sam.move();
}



