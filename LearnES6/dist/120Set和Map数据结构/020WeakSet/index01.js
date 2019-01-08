"use strict";

/**
 * Created by w1036_000 on 2016/12/2.
 */
//weakset中只能放对象
var obj = { a: 1 };
var ws1 = new WeakSet();
ws1.add(obj);
console.log(ws1.has(obj));
//weakset对对象的引用是弱引用，即不检查weakset是否引用了该对象而释放内存

//weakset不具有size属性，且不可遍历
console.log(ws1.size);
console.log(ws1.forEach);
//# sourceMappingURL=index01.js.map