// 可选属性表示不必须的。用 ？ 表示。
// 可选属性对可能用到的属性进行预定义
interface I {
    a?: string;
    b?: number;
}

function test(param: I): { num: number } {
    console.log(param.a, param.b);

    return { num: 3 };
}

let o = { a: 'aaa' };
test(o);
