'use strict';

/**
 * Created by w1036_000 on 2016/12/2.
 */
//Symbol.for登记的名字是全局环境的
var s1 = Symbol('foo');
var s2 = Symbol.for('foo');
var s3 = Symbol.for('foo');
console.log(s1 === s2, s1 === s3, s2 === s3);
//# sourceMappingURL=index01.js.map