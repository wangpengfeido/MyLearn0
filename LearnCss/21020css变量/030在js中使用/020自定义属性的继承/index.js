const element = document.querySelector(':root');

// 设置 css 变量
element.style.setProperty('--test-color', 'blue');

// 获取 css 变量值
console.log(element.style.getPropertyValue('--test-color'));
