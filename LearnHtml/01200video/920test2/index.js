var timer = null;
var video = document.getElementById("video1");
var poster = document.getElementById("poster"); //用于视频初始化poster图片
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth * 2; //获取屏幕宽度作为canvas的宽度  这个设置的越大，画面越清晰（相当于绘制的图像大，然后被css缩小）
canvas.height = window.innerHeight * 2;
context.drawImage(poster, 0, 0, canvas.width, canvas.height); //canvas上绘制postere图片 也可以点击播放后隐藏图片无需绘制
function draw1() {
  //绘制视频
  video.play();
  timer = setInterval(function() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height); //绘制视频
  }, 40);
}
var isplay = false; //视频播放状态
$("#myCanvas").on("touchstart", function(e) {
  var e = e || event;
  e.preventDefault();
  if (!isplay) {
    isplay = true;
    video.pause();
    $(".palyChange").show();
    clearInterval(timer);
  } else {
    video.play();
    $(".palyChange").hide();
    isplay = false;
    draw1();
  }
});
$(".palyChange").click(function() {
  //初始化暂停状态下 点击播放（开始绘制视频）
  video.play();
  $(".palyChange").hide();
  isplay = false;
  draw1();
});
