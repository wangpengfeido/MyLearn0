// $& 表示匹配的内容
console.log("mabn".replace(/a(b)/, "!$&!"));

// $n 表示第n个子匹配
console.log("mabn".replace(/a(b)/, "!$1!"));

// $`表示匹配子串左边的内容
console.log("mabn".replace(/a(b)/, "!$`!"));

// $'表示匹配子串右边的内容
console.log("mabn".replace(/a(b)/, "!$'!"));


