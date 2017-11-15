namespace N010030020010 {
    //抽象类
    abstract class Animal {
        constructor(name: string) {
            this.name = name;
        }

        name: string;

        //在抽象类中可定义抽象方法
        abstract move(distance?: number): void;
    }

    //继承抽象类
    class Snake extends Animal {
        constructor(name: string) {
            super(name);
        }

        //实现父类的move方法
        move(distance = 10) {
            console.log('snake is moving');
        }

        yell() {
            console.log('snake is yelling');
        }
    }

    //不允许：抽象类不能直接被实例化
    //let tom=new Animal();
    //允许：建立抽象类类型变量
    let sam: Animal;
    //允许
    sam = new Snake('sam');
    sam.move();
    //不允许：因为sam被赋给了Animal类型
    //sam.yell();
}



