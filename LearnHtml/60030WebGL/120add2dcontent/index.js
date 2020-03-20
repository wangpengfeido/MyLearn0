const canvas = document.querySelector('#glCanvas');
// 初始化gl环境
const gl = canvas.getContext('webgl');

if (gl === null) {
  alert('浏览器不支持');
  return;
}

// 设置"清空颜色"
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 使用设置的"清空颜色"清空
gl.clear(gl.COLOR_BUFFER_BIT);
