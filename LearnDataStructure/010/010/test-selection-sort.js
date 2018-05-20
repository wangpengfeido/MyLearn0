let {selectionSort} = require('./selection-sort');

let list = new Array(1000);
for (let i = 0; i < list.length; i++) {
    list[i] = Math.random();
}
console.log(JSON.stringify(list));
selectionSort(list);
console.log(JSON.stringify(list));
