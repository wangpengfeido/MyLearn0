/*
它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
*/
/*
方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2.成员的名字。
3.成员的属性描述符。
*/
/*
如果方法装饰器返回一个值，它会被用作方法的属性描述符。
*/

namespace N010180025010 {
    //装饰器工厂
    function enumerable(value: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('装饰器执行：', target, propertyKey, descriptor);
            descriptor.enumerable = value;
        }
    }

    class Greeter {
        @enumerable(false)
        greet() {
            return 'hello';
        }
    }

    console.log(Greeter.prototype.propertyIsEnumerable('greet'));
}