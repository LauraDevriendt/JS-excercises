/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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
        heroes.forEach((hero) => {
          listItems += ` <li class="hero">
                <h4 class="title">
                    <strong class="name">${hero.name}</strong>
                    <em class="alter-ego">${hero.alterEgo}</em>
                </h4>
                <p class="powers">${hero.abilities}</p>
            </li>`;
          ol.innerHTML = listItems;
        });
        let name = document.getElementById("hero-name").value;
        let alterEgo = document.getElementById("hero-alter-ego").value;
        let powers = document.getElementById("hero-powers").value;
        let abilities = powers.split(" ");
        listItems += ` <li class="hero">
            <h4 class="title">
                <strong class="name">${name}</strong>
                <em class="alter-ego">${alterEgo}</em>
            </h4>
            <p class="powers">${abilities}</p>
        </li>`;

        ol.innerHTML = listItems;
      });
  });
})();
