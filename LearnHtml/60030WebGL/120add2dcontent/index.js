window.mat4 = window.glMatrix.mat4;

function main() {

  // 顶点着色器源码
  const vsSource = `
    attribute vec4 aVertexPosition;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    void main(){
      gl_Position=uProjectionMatrix*uModelViewMatrix*aVertexPosition;
    }
  `;

  // 片段着色器源码
  const fsSource = `
    void main(){
      gl_FragColor=vec4(1.0,1.0,1.0,1.0);
    }
  `;

  const canvas = document.querySelector('#glCanvas');
  const gl = canvas.getContext('webgl');
  if (gl === null) {
    alert('浏览器不支持');
    return;
  }

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  // 得到attribute和uniform的下标指向。
  // attribute:从缓冲区接收值，每次迭代都从分配给该属性的缓冲区接收下一个值
  // uniform:类似于全局变量，在着色器的所有迭代中保持相同的值
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  const buffers = initBuffers(gl);
  drawScene(gl, programInfo, buffers);
}
main();

  // 创建指定类型的着色器，上传source源码并编译
  function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    // 发送源码到着色器对象
    gl.shaderSource(shader, source);

    // 编译着色器
    gl.compileShader(shader);

    // 编译失败
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  // 初始化着色器
  function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // 创建着色器程序
    const shaderProgram = gl.createProgram();
    // attachShader 往 WebGLProgram 添加着色器
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    // linkProgram 链接 WebGLProgram，将着色器编译为GPU代码
    gl.linkProgram(shaderProgram);

    // 创建失败
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
      return null;
    }

    return shaderProgram;
  }

  // 创建缓冲器
  function initBuffers(gl) {
    // 创建缓冲器对象
    const positionBuffer = gl.createBuffer();
    // 绑定上下文
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // 记录正方形顶点
    var vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];

    // 创建并初始化Buffer对象的数据存储区
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    return {
      position: positionBuffer,
    };
  }

  function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // 设置清除颜色为黑色不透明
    gl.clearDepth(1.0); // 设置清除深度缓冲区为1（清除所有深度）
    gl.enable(gl.DEPTH_TEST); // 启用深度比较
    gl.depthFunc(gl.LEQUAL); // 设置深度比较函数为：近处覆盖远处

    // 在绘制前清空
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // 创建一个透视矩阵，模仿相机的透视变换
    // 视角为45度，宽高比为canvas宽高比，可视范围为0.1到100
    const fieldOfView = (45 * Math.PI) / 180; // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // 设置绘制点，它是场景的中心
    const modelViewMatrix = mat4.create();
    // 绘制点矩阵变换，移动绘制点到我们想要绘制方形的地方
    mat4.translate(
      modelViewMatrix, // 目的矩阵
      modelViewMatrix, // 要变换的矩阵
      [-0.0, 0.0, -6.0] // 变换量
    );

    // 告诉 WebGL 如何从位置缓冲器拉取位置到 vertexPosition attribute 中
    {
      const numComponents = 3; // 每个顶点有三个值
      const type = gl.FLOAT; // buffer 里的数据时32位浮点
      const normalize = false; // 不采用归一化
      const stride = 0; // 每一组值的字节长度。设置为0表示紧密排列，即使用上面的type和numComponents
      const offset = 0; // 第一组值的字节偏移量
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset
      );
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }

    // 告诉 WebGL 使用着色器程序需
    gl.useProgram(programInfo.program);

    // 设置着色器uniform值
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);

    {
      const offset = 0;
      const vertexCount = 4;
      gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    }
  }
