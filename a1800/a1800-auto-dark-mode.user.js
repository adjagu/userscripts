// ==UserScript==
// @name        Auto Dark Mode : a1800
// @namespace   userscript@adjagu
// @match       https://a1800.net/
// @match       https://a1800.s1.zetohosting.pl/
// @grant       none
// @license     GPL-2.0-only
// @author      adjagu
// @description Apply "dark-mode" CSS class to body element.
// @version     0.0.4
// @icon        https://raw.githubusercontent.com/adjagu/userscripts/main/a1800/icon/a1800.png
// @downloadURL https://raw.githubusercontent.com/adjagu/userscripts/main/a1800/a1800-auto-dark-mode.user.js
// @homepageURL https://github.com/adjagu/userscripts
// @supportURL  https://github.com/adjagu/userscripts/issues
// ==/UserScript==

document.body.classList.add("dark-mode");
