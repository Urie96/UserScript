// ==UserScript==
// @name        TestHideElements
// @namespace   https://github.com/Urie96/UserScript
// @match       *://bits.*/*
// @version     1.0
// @author      Urie96
// @description 2025/04/13 21:43:37
// @license     MIT
// @run-at      document-idle
// @grant       GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  function hideElement(selector) {
    GM_addStyle(`${selector} {display: none !important;}`);
  }

  hideElement("#onesite-portal-header");
  hideElement("#onesite-framework-root > div > div > div.with-sider-expanded");
})();
