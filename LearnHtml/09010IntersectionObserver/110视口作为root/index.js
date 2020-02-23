const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.isIntersecting, entry.intersectionRatio, entry.target);
  });
});
observer.observe(document.querySelector('.main.one'));
observer.observe(document.querySelector('.main.two'));
