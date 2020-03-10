// typescript中，interface只关注对象的外形，满足接口需要的结构即可，而非必要明确实现它

interface I {
    a: string;
    b: number;
}

function test(param: I) {
    console.log(param.a, param.b);
    //使用不存在于接口I中的属性会报错
    // console.log(param.c);
}

let o = { a: 'aaa', b: 1, c: 'ccc' };
test(o);
//直接传入一个带有额外属性的对象会报错(见./040)
// test({ a: 'aaa', b: 1, c: 'bbb' });
