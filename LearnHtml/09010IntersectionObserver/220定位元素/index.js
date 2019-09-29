/**
 * 带有定位的元素，其交叉计算仍然与视觉效果一致
 */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting, entry.intersectionRatio, entry.target);
    });
  },
  {
    root: document.querySelector('.box'),
  }
);
observer.observe(document.querySelector('.main.one'));
observer.observe(document.querySelector('.main.two'));
