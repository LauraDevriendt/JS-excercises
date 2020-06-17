/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", function () {
    fetch("../../_shared/api.json")
      .then((response) => response.json())
      .then((data) => {
        let heroes = data.heroes;
        let listItems = "";
        heroes.forEach((hero) => {
          let templ = document.getElementById("tpl-hero").content;
          let copyHtml = document.importNode(templ, true);
          copyHtml.querySelector(".name").textContent = hero.name;
          copyHtml.querySelector(".alter-ego").textContent = hero.alterEgo;
          copyHtml.querySelector(".powers").textContent = hero.abilities;
          document.getElementById("target").appendChild(copyHtml);
        });
      });
  });
})();
