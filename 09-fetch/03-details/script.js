/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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
        let id = document.getElementById("hero-id").value;
        let heroes = data.heroes;
        let listItems = "";
        heroes.forEach((hero) => {
          if (id == hero.id) {
            let templ = document.getElementById("tpl-hero").content;
            let copyHtml = document.importNode(templ, true);
            copyHtml.querySelector(
              ".name"
            ).textContent = `index: ${hero.id} name: ${hero.name}`;
            copyHtml.querySelector(".alter-ego").textContent = hero.alterEgo;
            copyHtml.querySelector(".powers").textContent = hero.abilities;
            document.getElementById("target").appendChild(copyHtml);
          }
        });
      });
  });
})();
