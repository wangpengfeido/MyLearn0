// (命令：tsc ./index020.ts --strictNullChecks)
// 当编译器不能自动去除null和undefined，可以使用 ! 后缀手动去除
// 例如嵌套函数的情况
function addString(x, y) {
    function doAdd() {
        return x.charAt(0) + y.charAt(0);
    }
    y = y || 'a';
    return doAdd();
}
addString('b', null);
