let i = 0;
active();

function active() {
    setTimeout(function () {
        postMessage(i);
        i++;
        //在workers内内可使用close方法终止
        if(i>=5){
            close();
        }
        active();
    }, 1000);
}

