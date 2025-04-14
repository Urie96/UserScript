// ==UserScript==
// @name        DeleteSomeKeymaps
// @namespace   https://github.com/Urie96/UserScript
// @match       *://*/*
// @version     1.0
// @author      Urie96
// @description 2025/04/14 10:35:24
// @license     MIT
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function () {
  "use strict";

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.metaKey && (e.key === "k" || e.key === "j" || e.key === "l")) {
        // e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    },
    true,
  );
})();
