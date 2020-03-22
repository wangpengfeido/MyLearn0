interface I {
    a: string;
    b: number;

    // 可以添加一个字符串索引签名
    [popName: string]: any;
}

function test(param: I) {
    // 可以访问索引的任意属性
    console.log(param.a, param.b, param.c);
}

//允许
test({ a: 'aaa', b: 1, });

//允许
test({ a: 'aaa', b: 1, c: 'bbb' });

//允许
test({ a: 'aaa', b: 1, c: 'bbb' } as I);

