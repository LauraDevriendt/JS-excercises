/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
        let ol = document.createElement("ol");
        document.getElementsByClassName("material")[0].appendChild(ol);
        let heroes = data.heroes;
        let listItems = "";
        let id = document.getElementById("hero-id").value;
        heroes.forEach((hero) => {
          if (id == hero.id) {
            delete hero;
          } else {
            listItems += ` <li class="hero">
                    <h4 class="title">
                        <strong class="name">${hero.name}</strong>
                        <em class="alter-ego">${hero.alterEgo}</em>
                    </h4>
                    <p class="powers">${hero.abilities}</p>
                </li>`;
            ol.innerHTML = listItems;
          }
        });
      });
  });
})();
