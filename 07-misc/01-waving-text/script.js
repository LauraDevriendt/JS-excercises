/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let fontSizes = ["14px", "18px", "22px", "26px", "30px"];
  let target = document.getElementById("target");
  let string = target.innerHTML;
  let stringArray = [];
  for (let i = 0; i < string.length; i++) {
    let thisLetter = target.innerHTML.charAt(i);
    stringArray.push(thisLetter);
  }
  let size = 0;

  function wave() {
    function sizeChange() {
      if (size < 4 && up == true) {
        size++;
      }
      if (size > 0 && up == false) {
        size--;
      }
      if (size == 4) {
        up = false;
      }
      if (size == 0) {
        up = true;
      }
    }
    let up = true;
    target.innerHTML = "";
    for (let i = 0; i < stringArray.length; i++) {
      target.innerHTML +=
        '<span style="font-size: ' +
        fontSizes[size] +
        ';">' +
        stringArray[i] +
        "</span>";
      if (size < 4 && up == true) {
        size++;
      }
      if (size > 0 && up == false) {
        size--;
      }
      if (size == 4) {
        up = false;
      }
      if (size == 0) {
        up = true;
      }
    }
    setTimeout(wave, 1000);
  }

  wave();
})();
