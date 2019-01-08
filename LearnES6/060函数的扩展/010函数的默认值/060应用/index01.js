//指定不可省略的参数
function throwIfMissing() {
    throw new Error("缺少参数");
}

function f(a = throwIfMissing()) {

}

f();

// 指定可省略的参数
function f2(a = undefined) {

}

