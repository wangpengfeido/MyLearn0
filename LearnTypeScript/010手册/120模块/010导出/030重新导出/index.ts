//（命令：tsc ./index.ts）
// 这个命令会将入口和子模块分别打包，并生成commonjs模块（可通过--module命令配置）


//重新导出

//重命名
export {i as a} from './index030_1';

// 重新导出包含多个模块的模块
export * from './index030_1';
export * from './index030_2';