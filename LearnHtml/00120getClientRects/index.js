const dom_btn = document.querySelector('.btn');

dom_btn.addEventListener('click', () => {
  // getClientRects 返回边界矩形集合
  // 边界矩形不是与元素一一对应的，而是与元素占用的位置有关
  // 如本例中文字占了三行，则返回三个边界矩形
  console.log(document.querySelector('.text').getClientRects());
});
