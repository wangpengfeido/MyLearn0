// ==UserScript==
// @name         leetcode 答案解锁
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解锁付费才可看的 leetcode 答案
// @author       王彭飞
// @match        https://leetcode.com/**
// @grant        window.onurlchange
// ==/UserScript==

(function () {
  "use strict";

  // TODO：4.11 正式版发布后将部分 MutationObserver 的工作替换为 onurlchange
  // if (window.onurlchange === null) {
  //   window.addEventListener("urlchange", (info) => {
  //   });
  // }

  const dom_app = document.querySelector("#app");
  var observer = new MutationObserver(() => {
    const dom_solution = document.querySelector("#solution");
    if (dom_solution) {
      // observer.disconnect();
      doUnlock();
    }
  });
  observer.observe(dom_app, {
    childList: true,
    subtree: true,
  });

  function doUnlock() {
    const dom_lock = document.querySelector(".css-vtlunu");
    if (!dom_lock) {
      return;
    }

    const pageWrapper = dom_lock.parentElement;
    pageWrapper.removeChild(dom_lock);

    const solutionWrapper = pageWrapper.firstChild;
    solutionWrapper.className = "";
    solutionWrapper.style.height = "100%";

    console.log(
      "%cunlocked the solution by 王彭飞's Tampermonkey script.",
      "background-color:green;color:white;font-size:20px;"
    );
  }
})();
