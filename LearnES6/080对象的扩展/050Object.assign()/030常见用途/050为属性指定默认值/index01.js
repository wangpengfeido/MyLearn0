const DEFAULTS = {
    a: 'aaa',
    b: 'bbb'
};

function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
    return options;
}

let obj = {a: 'a', c: 'c'};
console.log(processContent(obj));

