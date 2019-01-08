"use strict";

/**
 * Created by w1036_000 on 2016/12/2.
 */
function fn() {
    return "hi";
}
var obj = {
    fn: fn,
    method: function method() {
        return "hello";
    }
};
console.log(obj.fn());
console.log(obj.method());
//# sourceMappingURL=index03.js.map