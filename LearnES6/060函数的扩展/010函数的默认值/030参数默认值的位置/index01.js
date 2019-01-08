/**
 * Created by w1036_000 on 2016/11/30.
 */
function fn(x = 1, y = 2, z = 3) {
    console.log(x, y, z);
}
fn();
fn(undefined,20);
// null不能触发默认值
fn(null,20);
//报错
// fn(,20);







