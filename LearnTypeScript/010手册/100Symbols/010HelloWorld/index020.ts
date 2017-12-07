namespace N010100010020 {
    let sym1 = Symbol();
    let sym2 = Symbol('key');

    let obj = {
        [sym1]: 'value',
    };
    console.log(obj[sym1]);

    class C {
        [sym2]() {
            return "this is Symbol attr in C";
        }
    }

    console.log(new C()[sym2]());
}