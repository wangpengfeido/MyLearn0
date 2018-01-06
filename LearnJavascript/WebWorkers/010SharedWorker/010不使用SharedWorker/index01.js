let myWorker = new Worker('./worker.js');

document.getElementById('btn').onclick = function () {
    myWorker.postMessage(6)
};
myWorker.onmessage = function (event) {
    console.log(event.data)
};
