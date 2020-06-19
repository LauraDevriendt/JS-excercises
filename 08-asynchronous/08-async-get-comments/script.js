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
  async function processComments(postId){
    let comments= await window.lib.getComments(postId);
    console.log(postId, comments);
  }
  async function asyncCall() {
    let posts = await window.lib.getPosts();
    posts.forEach((post) => {
     processComments(post.id)
    });
  
  }

  document.getElementById("run").addEventListener("click", asyncCall);
})();
