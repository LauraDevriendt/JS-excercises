/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let valueAt1O = "";
  let passOne = document.getElementById("pass-one");
  passOne.addEventListener("keyup", function () {
    document.getElementById("counter").innerHTML = `${passOne.value.length}/10`;

    if (passOne.value.length == 10) {
      valueAt1O = passOne.value;
    }

    if (passOne.value.length >= 11) {
      alert("no more characters than 10");
      passOne.value = valueAt1O;
      document.getElementById(
        "counter"
      ).innerHTML = `${passOne.value.length}/10`;
      passOne.innerHTML = passOne.value;
    }
  });
})();
