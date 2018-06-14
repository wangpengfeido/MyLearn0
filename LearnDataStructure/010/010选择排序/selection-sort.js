/**
 * 选择排序
 * 从第一个元素开始，查找之后（包括该元素）最小的元素，将最小的元素与该元素交换
 */

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

exports.selectionSort = array => {
    for (let i = 0, len = array.length; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
    return array;
};