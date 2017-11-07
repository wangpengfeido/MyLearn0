function test(param) {
    console.log(param.attrOne, param.attrTwo);
    //使用param.attrThree会报错
    //console.log(param.attrOne, param.attrTwo, param.attrThree);
    return { num: 3 };
}
var o = { attrOne: 'aaa', attrTwo: 1, attrThree: 'bbbbb' };
test(o);
//直接写一个带有attrThree属性的对象会报错
//test({attrOne: 'aaa', attrTwo: 1, attrThree: 'bbb'})； 
