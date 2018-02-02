namespace N010180050020 {
    function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
        //当有返回值时，原来的构造方法被替换
        //新构造方法必须在形式上继承原来的构造方法，即需要包含构造方法所有属性（并不一定是真实的继承）
        return class extends constructor {
            newProperty = "new property";
            hello = "override";
        }
    }

    @classDecorator
    class Greeter {
        constructor(m: string) {
            //这里设置的hello将不再有效，因为被新的构造方法中的hello属性覆盖掉（相当于重写）。请详细考虑类的继承关系。
            this.hello = m;
        }

        property = "property";
        hello: string;
    }

    console.log(new Greeter('world'));
}

