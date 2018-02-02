/*
类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/

function scaled(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@scaled
class Greeter {
    constructor(a: string = 'aaa') {
        this.a = a;
    }

    a: string;
    m(){}
}

//由于Greeter.prototype被锁定，所以m方法无法被删除，后面打印m方法仍然是一个Function
//如果不使用上面的装饰器，打印m方法将是undefined
delete Greeter.prototype.m;
let g = new Greeter('a');
console.log(g.m);
