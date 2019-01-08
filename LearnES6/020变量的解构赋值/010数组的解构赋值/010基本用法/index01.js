/**
 * Created by w1036_000 on 2016/11/28.
 */
let [a1, a2, a3] = [1, 2, 4];
let [b1, [b2, b3], b4] = [1, [2, 3], 4];
// 如果解构不成功，变量的值就等于undefined
let [c1, c2] = [1];
// 不完全解构，可以成功。
let [d1, d2] = [1, 2, 3];
// 等号右边的数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
let [e1, e2] = new Set([1, 2]);

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [f1, f2] = fibs();