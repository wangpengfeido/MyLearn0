// Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，
function f(...params) {
    console.log(this.a, params);
}

Reflect.apply(f, {a: 1});

// 通常用于function定义了自己的apply方法时，使用Function.prototype.apply.call调用原来的apply



