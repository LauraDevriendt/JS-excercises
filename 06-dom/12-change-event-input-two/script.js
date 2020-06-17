/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let passOne = document.getElementById("pass-one");
  passOne.addEventListener("change", function () {
    let chars = Array.from(passOne.value);
    document.getElementById("validity").innerHTML = `Not ok`;
    let digits = 0;

    chars.forEach((char) => {
      if (isNaN(parseInt(char)) == false) {
        digits++;
        console.log(digits);
      }
    });
    if (passOne.value.length >= 8 && digits >= 2) {
      document.getElementById("validity").innerHTML = `ok`;
    }
  });
})();
