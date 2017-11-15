namespace N030020020 {
    class Animal {
        constructor(name: string) {
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

    class Person {
        constructor(name: string) {
            this.name = name;
        }

        private name: string;

        move(distance: number = 5) {
            console.log('person is moving');
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

    //不同处声明的private或protected成员，不允许兼容赋值
    // let tom:Animal = new Person('tome');
    // let sam:Animal={
    //   name:'sam',
    //   move:()=>{
    //     console.log('sam is moveing');
    //   },
    // };
}



