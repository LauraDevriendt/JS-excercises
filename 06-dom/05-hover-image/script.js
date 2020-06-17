/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // y <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />

  let img = document.getElementsByTagName("img")[0];
  img.addEventListener("mouseover", function () {
    img.setAttribute("src", img.getAttribute("data-hover"));
  });
})();
