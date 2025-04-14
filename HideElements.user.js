// ==UserScript==
// @name        Hide Elements
// @namespace   https://github.com/Urie96/UserScript
// @match       *://*/*
// @version     1.2
// @author      Urie96
// @description 2025/04/13 21:43:37
// @license     MIT
// @run-at      document-idle
// @grant       GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  function hideElement(...selectors) {
    const selector = selectors.join(", ");
    GM_addStyle(`${selector} {display: none !important;}`);
  }

  const url = URL.parse(document.URL);

  function isInByteDan() {
    return url.hostname.includes("bytedanc");
  }

  if (isInByteDan() && url.pathname === "/workbench/tools/46") {
    hideElement(
      "#onesite-portal-header",
      "#onesite-framework-root > div > div > div.with-sider-expanded",
    );
  }
})();
