/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let target = document.getElementById("target");
  let buttons = document.getElementsByTagName("button");
  let input = document.getElementsByTagName("input");
  let valueArray = [460, "00", "00", "00"];

  for (let i = 0; i < buttons.length; i++) {
    let min = parseInt(input[i].getAttribute("data-min"));
    let max = parseInt(input[i].getAttribute("data-max"));
    buttons[i].addEventListener("click", function () {
      let stopVal = randomIntFromInterval(min, max);
      input[i].value = stopVal;
      valueArray[i] = stopVal;
      target.innerHTML = `+0${valueArray.join("")}`;
    });
  }
})();

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
