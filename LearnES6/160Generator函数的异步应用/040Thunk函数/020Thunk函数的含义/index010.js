// 编译器的“传名调用”实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。

function f1(m) {
    console.log(m);
}

f1(1 + 1);

// 等同于

function f2(thunk) {
    console.log(thunk());
}

let thunk = function () {
    return 1 + 1;
};

f2(thunk);


