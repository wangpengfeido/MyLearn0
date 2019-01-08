/**
 * Created by w1036_000 on 2016/11/30.
 */
function fn({x=1, y=2}={}) {
    console.log(x,y);
}
fn({x:3,y:4});
fn({x:3});
fn();