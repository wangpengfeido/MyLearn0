const dom_btn = document.querySelector('.btn');
const dom_one = document.querySelector('.main.one');

dom_btn.addEventListener('click', () => {
  // getBoundingClientRect返回元素的大小及相对于视口的位置
  // NOTE：bottom指元素低端距视口上端距离，right指元素右端距视口左端距离
  console.log(dom_one.getBoundingClientRect());
});
