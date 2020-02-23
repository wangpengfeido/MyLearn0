// 元素需要继承对应的 Element 类
class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    const uls = Array.from(document.querySelectorAll(':root ul'));
    const lis = Array.from(document.querySelectorAll(':root li'));

    uls.slice(1).forEach(ul => {
      ul.style.display = 'none';
    });

    lis.forEach(li => {
      const childText = li.childNodes[0];
      const newSpan = document.createElement('span');
      newSpan.textContent = childText.textContent;
      childText.parentNode.insertBefore(newSpan, childText);
      childText.parentNode.removeChild(childText);

      if (newSpan.nextSibling) {
        newSpan.addEventListener('click', event => {
          const nextUl = event.target.nextElementSibling;
          if (nextUl.style.display === 'none') {
            nextUl.style.display = 'block';
          } else {
            nextUl.style.display = 'none';
          }
        });
      }
    });
  }
}

// 第三个参数指定继承的元素
customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
