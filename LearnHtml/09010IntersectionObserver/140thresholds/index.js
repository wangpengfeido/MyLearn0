const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting, entry.intersectionRatio, entry.target);
    });
  },
  {
    root: document.querySelector('.box'),
    // threshold指定当交叉率多少时触发回调
    // 它可以被指定为一个数组
    threshold: 0.5,
  }
);
observer.observe(document.querySelector('.main.one'));
