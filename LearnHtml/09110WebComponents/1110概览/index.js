// Autonomous custom elements
// 不继承其他内建元素
// 使用： <my-one></my-one>
customElements.define(
  'my-one',
  class extends HTMLElement {
    constructor() {
      super();
    }
  }
);

// Customized built-in elements
// 继承其他内建元素
// 使用：<p is="my-two"></p>
customElements.define(
  'my-two',
  class extends HTMLParagraphElement  {
    constructor() {
      super();
    }
  },
  { extends: 'p' }
);
