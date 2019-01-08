"use strict";

/**
 * Created by w1036_000 on 2016/12/2.
 */
var s = new Set([1, 2, 3]);
console.log(s.size);
//////////////////////////////////////////////////
s.add(5);
console.log(s);
s.add(1);
console.log(s);
//////////////////////////////////////////////////////
console.log(s.delete(1));
console.log(s);
////////////////////////////////////////////
console.log(s.has(2));
////////////////////////////////////////////
s.clear();
console.log(s);
//# sourceMappingURL=index01.js.map