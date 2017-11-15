namespace N010030020020 {
    class Animal {
        constructor(name: string) {
            this.name = name;
        }

        name: string;

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

        name: string;

        move(distance: number = 5) {
            console.log('person is moving');
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

    //在没有private或protected成员的情况下，允许结构相同的对象赋值
    let tom:Animal = new Person('tome');
    tom.move();
    let sam:Animal={
      name:'sam',
      move:()=>{
        console.log('sam is moveing');
      },
    };
}



