namespace N010100010010 {
    let sym1 = Symbol();
    console.log(sym1);

    let sym2 = Symbol('key');
    let sym3 = Symbol('key');

    //结果：false
    console.log(sym2 === sym3);
}