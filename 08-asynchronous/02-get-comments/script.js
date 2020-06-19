/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", function () {
    window.lib.getPosts(handleResponse);
  });

  function handleResponse(error, arr) {
    if (error) {
      console.error(error);
    } else {
      console.table(arr);
      arr.forEach((post) => {
        window.lib.getComments(post.id, test);
        post.comments = comments;
      });
     
    }
  }

  function test(error, comment) {
    if (error) {
      console.error(error);
    } else {
      console.table(comment);
    }
  }
})();
