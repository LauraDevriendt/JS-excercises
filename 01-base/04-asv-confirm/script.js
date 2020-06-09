/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function questions() {
  let gender = prompt("what's your gender(man/woman)?");
  let age = prompt("How old are you?");
  let town = prompt("Which town do you live?");

  if (
    confirm(
      `You are a ${gender} and you're ${age} years old and you live in ${town}?`
    )
  ) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
    questions();
  }
})();
