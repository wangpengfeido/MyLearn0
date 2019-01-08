
// u与i一起使用，可识别到非规范字符。如\u004B与\u212A都是大写的K
console.log(/[A-Z]/i.test('\u212A'));
console.log(/[A-Z]/ui.test('\u212A'));