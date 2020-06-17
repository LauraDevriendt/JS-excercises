/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let passOne = document.getElementById("pass-one");
  let passTwo = document.getElementById("pass-two");

  document.getElementById("run").addEventListener("click", function () {
    if (passOne.value !== passTwo.value) {
      passOne.classList.add("error");
      passTwo.classList.add("error");
      alert("passwords doesn't match");
    }
  });
})();
