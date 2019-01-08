"use strict";

/**
 * Created by w1036_000 on 2016/11/28.
 */
var x = 10;
{
    //在此处输出x是非法的（暂时性死区）
    // console.log(x);
    var _x = 20;
    console.log(_x);
}
//# sourceMappingURL=index01.js.map