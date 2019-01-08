'use strict';

/**
 * Created by w1036_000 on 2016/12/2.
 */
//使用simbol定义常量
var constObj = {
    COLOR_RED: Symbol(),
    COLOR_GREEN: Symbol()
};
function getColor(color) {
    switch (color) {
        case constObj.COLOR_RED:
            return 'red';
            break;
        case constObj.COLOR_GREEN:
            return 'green';
            break;
    }
}
console.log(getColor(constObj.COLOR_GREEN));
//# sourceMappingURL=index02.js.map