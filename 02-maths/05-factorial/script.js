/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  function factorial(num) {
    return num != 1 ? num * factorial(num - 1) : 1;
  }

  document.getElementById("run").addEventListener("click", function () {
    let num = parseInt(document.getElementById("number").value);
    let factorialised = factorial(num);
    document.write(factorialised);
    let div = document.createElement("div");
    div.innerHTML = factorialised;
  });
})();
