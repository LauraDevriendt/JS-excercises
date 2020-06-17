/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let guesses = 0;

(function () {
  let random = Math.floor(Math.random() * 10);
  let user = parseInt(
    prompt("I've picked a number between 1 and 10! can you guess?")
  );

  console.log(random);
  guessing(user, random, guesses);
})();

function guessing(user, random, guesses) {
  if ((user != random) == true) {
    if (user < random) {
      guesses++;
      user = parseInt(prompt("higher"));
      console.log(guesses);

      guessing(user, random, guesses);
    } else {
      guesses++;
      user = parseInt(prompt("lower"));
      console.log(guesses);

      guessing(user, random, guesses);
    }
  } else {
    user = alert(`Yes that's right! you needed ${guesses} guesses`);
  }
}
