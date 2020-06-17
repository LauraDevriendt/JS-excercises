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
  let valueArray = [460, "00", "00", "00"];

  for (let i = 0; i < buttons.length; i++) {
    let min = parseInt(buttons[i].getAttribute("data-min"));
    let max = parseInt(buttons[i].getAttribute("data-max"));
    buttons[i].addEventListener("click", function () {
      if (min < max) {
        min++;

        buttons[i].innerHTML = `${min}`;
        valueArray[i] = min;
        console.log(valueArray);

        if (min < 10) {
          parseInt(valueArray[i]);
          buttons[i].innerHTML = `0${min}`;
          valueArray[i] = `0${min}`;
        }
      } else {
        min = max;
        buttons[i].innerHTML = `${min}`;
      }

      target.innerHTML = `+0${valueArray.join("")}`;
    });
  }
})();
