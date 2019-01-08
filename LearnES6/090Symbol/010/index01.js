/**
 * Created by w1036_000 on 2016/11/28.
 */
let s = Symbol("foo");
console.log(typeof s);
console.log(s);
//参数如果是对象调用toString方法/////////////////
console.log(Symbol({
    name: 'a',
    toString(){
        return this.name;
    }
}));
//////////////////////////////////////
console.log(s.toString());
console.log(Boolean(s));

