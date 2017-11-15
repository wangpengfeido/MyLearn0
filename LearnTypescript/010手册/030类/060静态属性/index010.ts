namespace N030060010 {
    class Animal {

        //静态成员
        //静态成员也可以指定修饰符
        private static introduce: string = 'this is an animal';

        static getIntroduce(): string {
            return this.introduce;
        }

        //只有静态成员能访问静态成员
        static setIntroduce(newIntroduce) {
            this.introduce = newIntroduce;
        }

        constructor(name: string) {
            this.name = name;
        }

        name: string;

        move(distance: number = 5) {
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

    console.log(Animal.getIntroduce());
    Animal.setIntroduce('this is a cute animal');
    console.log(Animal.getIntroduce());

    let tom = new Animal('tom');
    //对象不能访问静态成员
    //tom.getIntroduce();
}



