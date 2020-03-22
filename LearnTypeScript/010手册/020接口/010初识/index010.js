function test(param) {
    console.log(param.a, param.b);
    //使用不存在于接口I中的属性会报错
    // console.log(param.c);
    return { num: 3 };
}
var o = { a: 'aaa', b: 1, c: 'ccc' };
test(o);
//直接写一个带有attrThree属性的对象会报错
//test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'})；
