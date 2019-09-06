// PC端基本可以
// Android除了chrome全挂
// IOS Safari也不行
class CanvasVideo {
  constructor(video, canvas) {
    this.video = video;
    this.canvas = canvas;

    this.videoDrawWidth = 0;
    this.videoDrawHeight = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;

    this.ctx = this.canvas.getContext('2d');

    this.timer = null;
  }
  init() {
    this.resetCanvasSize();
    this.resetVideoDrawSize();
  }
  resetCanvasSize() {
    this.canvasWidth = this.canvas.offsetWidth;
    this.canvasHeight = this.canvas.offsetHeight;
    // this.canvasWidth = this.video.videoWidth;
    // this.canvasHeight = this.video.videoHeight;
    // this.canvasWidth = 300;
    // this.canvasHeight = 300;
    this.canvas.setAttribute('width', this.canvasWidth);
    this.canvas.setAttribute('height', this.canvasHeight);
  }
  resetVideoDrawSize() {
    // this.videoDrawWidth = this.video.videoWidth;
    // this.videoDrawHeight = this.video.videoHeight;
    this.videoDrawWidth = this.canvasWidth;
    this.videoDrawHeight = this.canvasHeight;
  }
  play() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.video.play();
    this.timer = setInterval(() => {
      document.querySelector('.sth-fixed').innerHTML = `${this.videoDrawWidth},${this.videoDrawHeight};${
        this.video.offsetHeight
      }`;
      try {
        this.ctx.drawImage(this.video, 0, 0, this.videoDrawWidth, this.videoDrawHeight);
      } catch (e) {
        document.querySelector('.sth-fixed').innerHTML = 'sdfdsf';
      }
    }, 40);
  }
  pause() {
    clearInterval(this.timer);
    this.video.pause();
  }
}

const video = document.querySelector('.video');
const canvas = document.querySelector('.canvas');
video.addEventListener('loadedmetadata', function() {
  let c = new CanvasVideo(video, canvas);
  c.init();
  document.querySelector('.btn-play').addEventListener('click', () => {
    c.play();
  });
  document.querySelector('.btn-stop').addEventListener('click', () => {
    c.pause();
  });
});
