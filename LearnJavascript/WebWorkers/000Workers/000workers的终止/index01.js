let myWorker = new Worker('./workers01.js');
myWorker.onerror=function (error) {
    console.log(error);
};
myWorker.onmessage = function (message, fileName, lineNo) {
    //在workers外可使用terminate方法终止
    // if(message.data>=5){
    //     myWorker.terminate();
    // }
    console.log(message);
};
