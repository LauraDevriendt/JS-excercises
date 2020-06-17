/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let val = 0;
  val = localStorage.getItem("val");
  let counter = document.getElementById("target");
  counter.innerHTML = localStorage.getItem("val");
  document.getElementById("increment").addEventListener("click", function () {
    val++;
    localStorage.setItem("val", val);
    counter.innerHTML = localStorage.getItem("val");
  });
})();
