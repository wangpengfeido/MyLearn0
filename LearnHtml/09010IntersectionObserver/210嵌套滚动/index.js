/**
 * 当有嵌套的滚动条时
 * 交叉仍然会按照实际视觉计算
 */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting, entry.intersectionRatio, entry.target);
  });
});
observer.observe(document.querySelector('.main.one'));
observer.observe(document.querySelector('.main.two'));
