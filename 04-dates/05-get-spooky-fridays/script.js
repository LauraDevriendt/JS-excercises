/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var maanden = new Array();
  maanden[0] = "January";
  maanden[1] = "February";
  maanden[2] = "March";
  maanden[3] = "April";
  maanden[4] = "May";
  maanden[5] = "June";
  maanden[6] = "July";
  maanden[7] = "August";
  maanden[8] = "September";
  maanden[9] = "October";
  maanden[10] = "November";
  maanden[11] = "December";

  document
    .getElementById("run")
    .addEventListener("click", function numberOfFridays13th(year) {
      year = parseInt(document.getElementById("year").value);
      var months = "";
      for (let month = 0; month < 12; month++) {
        let d = new Date(year, month, 13);
        if (d.getDay() == 5) {
          months += `${maanden[d.getMonth()]} `;
          console.log(months);
        }
      }

      alert(`${months}`);
    });
})();
