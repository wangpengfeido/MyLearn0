const dom_btn = document.querySelector('.btn');
const dom_one = document.querySelector('.main.one');

dom_btn.addEventListener('click', () => {
  // 在嵌套滚动条中依然有效，十分神奇
  console.log(dom_one.getBoundingClientRect());
});
