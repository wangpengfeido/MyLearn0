// (命令：tsc ./index020.ts --strictNullChecks)
function addString(x, y) {
    function doAdd() {
        return x.charAt(0) + y.charAt(0);
    }
    y = y || 'a';
    return doAdd();
}
addString('b', null);
