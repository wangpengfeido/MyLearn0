class Anim {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas_width = 0;
    this.canvas_height = 0;
    this.ctx = this.canvas.getContext('2d');

    this.img = new Image();
    this.img_drawWidth = 0;
    this.img_drawHeight = 0;

    this.timer = null;
    this.frameTime = 30;
    this.totalTime = 8000;
    this.drawXPx = 0;
  }
  init() {
    return new Promise(resolve => {
      this.regetCanvasSize();
      window.addEventListener('resize', () => {
        this.regetCanvasSize();
        this.regetImgSize();
      });

      this.img.src = './img.jpg';
      this.img.addEventListener('load', () => {
        this.regetImgSize();
        resolve();
      });
    });
  }
  regetCanvasSize() {
    this.canvas_width = this.canvas.offsetWidth;
    this.canvas_height = this.canvas.offsetHeight;
    this.canvas.setAttribute('width', this.canvas_width);
    this.canvas.setAttribute('height', this.canvas_height);
  }
  regetImgSize() {
    this.img_drawHeight = this.canvas_height;
    this.img_drawWidth = (this.img_drawHeight * this.img.naturalWidth) / this.img.naturalHeight;
  }
  draw(x) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.img, x, 0, this.img_drawWidth, this.img_drawHeight);
    this.ctx.drawImage(this.img, x + this.img_drawWidth, 0, this.img_drawWidth, this.img_drawHeight);
  }
  start() {
    this.timer = setInterval(() => {
      this.draw(this.drawXPx);
      this.drawXPx -= this.img_drawWidth / (this.totalTime / this.frameTime);
      if (this.drawXPx < -this.img_drawWidth) {
        this.drawXPx += this.img_drawWidth;
      }
    }, this.frameTime);
  }
}

const a = new Anim(document.querySelector('#canvas'));
a.init().then(() => {
  a.start();
});
