declare namespace n {
  const a: string;
}

interface I {
  a: string;
}

declare const b: string;

// 其他自动导出
export declare const aaa: string;
// 其他不自动导出
// declare const aaa: string;
// export { aaa };
// 其他不自动导出
// declare const aaa: string;
// export default aaa;

