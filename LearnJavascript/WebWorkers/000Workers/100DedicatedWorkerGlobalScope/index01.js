let myWorker = new Worker('./workers01.js');
myWorker.onerror=function (error) {
    console.log(error);
};
