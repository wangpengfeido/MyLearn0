/**
 * Created by w1036_000 on 2016/12/2.
 */
//simbol必须使用方括号
let s=Symbol();
let obj={
    [s]:'hello',
    s:'hi'
};
console.log(obj[s]);
console.log(obj.s);
console.log(obj['s']);


