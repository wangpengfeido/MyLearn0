const dom_anim = document.querySelector('.anim');
const dom_img = document.querySelector('.img1');
let img_width = 0;
let img_height = 0;

let timer = null;
const frameTime = 30;
const totalTime = 8000;
let drawXPx = 0;

if (dom_img.complete) {
  init();
} else {
  dom_img.addEventListener('load', () => {
    init();
  });
}

function init() {
  img_width = dom_img.width;
  img_height = dom_img.height;
  start();
}

function start() {
  timer = setInterval(() => {
    console.log('.......', drawXPx);
    dom_anim.style.transform = `translateX(${drawXPx}px)`;
    drawXPx -= img_width / (totalTime / frameTime);
    if (drawXPx < -img_width) {
      drawXPx += img_width;
    }
  }, frameTime);
}
