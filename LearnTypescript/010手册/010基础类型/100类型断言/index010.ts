let someValue: any = 'this is something';
//如果这么写，len将是undefined
// let someValue: any = 45;
let len: number = (someValue as string).length;
console.log(len);