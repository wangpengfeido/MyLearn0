namespace N030030040 {
    class Animal {
        //构造方法可以声明为protected。此时改类可以被继承但不能被实例化。
        protected constructor(name: string) {
            this.name = name;
        }

        private name: string;

        move(distance: number = 5) {
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }

        move(distance = 10) {
            console.log('snake is moving');
            super.move(distance);
        }
    }

    let tom = new Snake('tom');
    tom.move();
    let sam: Animal = new Snake('tom');
    sam.move();
    //不能直接实例化
    // let jerry=new Animal('jerry');
}



