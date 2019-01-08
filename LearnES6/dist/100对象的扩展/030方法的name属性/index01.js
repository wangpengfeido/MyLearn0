"use strict";

/**
 * Created by w1036_000 on 2016/12/2.
 */
var obj = {
    sayName: function sayName() {
        console.log(arguments.callee.name);
    }
};
console.log(obj.sayName.name);
obj.sayName();
//# sourceMappingURL=index01.js.map