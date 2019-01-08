/**
 * Created by w1036_000 on 2016/12/2.
 */
//Symbol.for登记的名字是全局环境的
let s1=Symbol('foo');
let s2=Symbol.for('foo');
let s3=Symbol.for('foo');
console.log(s1===s2,s1===s3,s2===s3);
