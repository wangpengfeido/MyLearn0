// 枚举成员作为类型

enum Kind {
  Circle,
  Square,
}

let x: Kind.Circle;

x = Kind.Circle;
x = 0;
// 不允许
// x = Kind.Square;
