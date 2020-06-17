/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  async function asyncCall() {
    let ids = "";
    console.log("calling");
    const result = await window.lib.getPosts();
    result.forEach((res) => {
      ids += res.id;
    });
   let endResult=await window.lib.getComments(ids);
  }

  document.getElementById("run").addEventListener("click", asyncCall);
})();
