namespace N030040020 {
    class Animal {

        //为构造方法参数指定private、publick、readonly修饰符，相当于声明了一个类成员
        constructor(private readonly name: string) {
            this.name = name;
        }

        move(distance: number = 5) {
            console.log(`${this.name} moved ${distance} meter`)
        }
    }

    let tom = new Animal('tom');
    tom.move();

}



