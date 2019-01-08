// 例子：数组拍平
function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}

let tree = [1, [3, 4, [5]], 2];
console.log([...iterTree(tree)]);




