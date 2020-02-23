class MyTest extends HTMLElement {
  constructor() {
    super();

    // 获取属性内容
    const title = this.getAttribute('title');
    const desc = this.getAttribute('desc');

    // 创建一个 shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.className = 'my-test__wrapper';
    shadow.appendChild(wrapper);

    const dom_title = document.createElement('div');
    dom_title.className = 'my-test__wrapper__title';
    dom_title.textContent = title;
    wrapper.appendChild(dom_title);

    const dom_desc = document.createElement('div');
    dom_desc.className = 'my-test__wrapper__desc';
    dom_desc.textContent = desc;
    wrapper.appendChild(dom_desc);

    // 创建css
    const style = document.createElement('style');
    style.textContent = `
      .my-test__wrapper{
        background-color:rgba(0,0,0,0.3);
      }
      .my-test__wrapper__title{
        color:#fff;
        font-size:18px;
      }
      .my-test__wrapper__desc{
        color:#fff;
        font-size:14px;
      }
    `;
    shadow.appendChild(style);
  }
}

customElements.define('my-test', MyTest);
