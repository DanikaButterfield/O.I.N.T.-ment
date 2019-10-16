// ==UserScript==
// @name         O.I.N.T-ment
// @namespace    https://github.com/DanikaButterfield/O.I.N.T.-ment
// @version      1
// @description  Open In New Tab, the OINTment for the Internet.
// @author       Danika Butterfield
// @match        *://*/*
// @grant        none
// ==/UserScript==

const $links = document.querySelectorAll("a")


$links.forEach($link => {
    var i;
    for (i = 0; i < $links.length; i++) {
        $link.target = "_blank";
    }
})();