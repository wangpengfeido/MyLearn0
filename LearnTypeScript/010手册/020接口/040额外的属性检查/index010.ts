// 对象字面量赋予接口类型时会被特殊对待，经过额外属性检查
// 如果对象字面量包含"目标类型"不包含的属性，将会报错

interface I {
    a: string;
    b: number;
}

function test(param: I) {
    console.log(param.a, param.b);
}

//允许
test({ a: 'aaa', b: 1, });

//不允许
//test({a: 'aaa', b: 1, c: 'bbb'});

//允许
// 使用类型断言绕过检查
test({ a: 'aaa', b: 1, c: 'bbb' } as I);

//允许
// let o = {attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'};
// test(o);

