namespace N030030010 {
    class Animal {
        constructor(name: string) {
            this.name = name;
        }

        private name: string;

        //默认为public
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

    let tom = new Snake('tome');
    //private成员是不允许直接被对象访问的
    // console.log(tom.name);
}



