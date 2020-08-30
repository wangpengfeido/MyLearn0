// ( 命令： npx tsc ./index010.ts )

// 类型别名是给类型起个名字。
// 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型

// 它并不是新建了一个类型，而只是新创建了一个名字引用那个类型

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

// 也可以是泛型
type Container<T> = { value: T };

// 类型中可以引用自己
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};

// 与交叉类型一起使用,可以创建出一些稀奇古怪的类型
type LinkedList<T> = T & { next: LinkedList<T> };
let l: LinkedList<number>;
let n1 = l.next;
let n2 = l.next.next;
