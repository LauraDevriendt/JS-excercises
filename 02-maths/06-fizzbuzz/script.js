/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3,
//     "buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these.

function fizzbuzz(num) {
  if (num < 1 || num > 100) {
    console.log("choose number between 1 and 100");
    return;
  }
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzbuzz");
  } else if (num % 3 == 0) {
    console.log("fizz");
  } else if (num % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(num);
  }
}
