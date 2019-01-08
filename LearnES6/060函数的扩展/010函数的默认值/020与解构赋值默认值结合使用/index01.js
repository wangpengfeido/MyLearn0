/**
 * Created by w1036_000 on 2016/11/30.
 */
//双重默认值
function say({x='hello', y='world'}={}) {
    console.log(x,y);
}
say();
say({x:'hi'});
say({y:'china'});


