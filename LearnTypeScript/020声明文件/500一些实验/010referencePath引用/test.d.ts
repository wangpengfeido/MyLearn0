// 可正常编译
declare const a: number;

// 不可正常编译
// declare const a: string;

// 不可正常编译
// export declare const a:number;

// 不可正常编译
// 因为，在没有export语句时，declare的是全局变量；有了export变成了模块，declare的就是模块内变量
// declare const a: number;
// export { a };

