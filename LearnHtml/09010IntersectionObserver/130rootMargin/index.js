const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting, entry.intersectionRatio, entry.target);
    });
  },
  {
    root: document.querySelector('.box'),
    // rootMargin可以调整矩形区域的大小
    // 当root被指定时，它也可以设置百分比
    rootMargin: '-100px',
  }
);
observer.observe(document.querySelector('.main.one'));
