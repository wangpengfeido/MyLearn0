/**
 * Created by w1036_000 on 2016/12/2.
 */
let s1=Symbol.for('hi');
let s2=Symbol('hello');
console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(s2));