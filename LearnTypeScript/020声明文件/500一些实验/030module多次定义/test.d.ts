// 对于一个module的多次声明，相当于将其合并
declare module "test" {
  const a: number;
}
declare module "test" {
  const b: number;
}
