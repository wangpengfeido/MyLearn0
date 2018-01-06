//workers内外的信息传递互相独立，互不干扰
let myWorker = new Worker('./workers01.js');
myWorker.onmessage = function (message, fileName, lineNo) {
    console.log('接收到workers传出的数据',message);
};

setInterval(function () {
    myWorker.postMessage('向workers传入了数据');
},2000);
