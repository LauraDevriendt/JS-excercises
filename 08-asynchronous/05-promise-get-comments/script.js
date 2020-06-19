/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", function () {
    window.lib
      .getPosts() // this is the promise
      .then( (posts) => {// promise is furfilled
      posts.forEach(post => {
        let innerPromise = window.lib.getComments(post.id);
        innerPromise.then((comments)=>{
          console.table(comments);
        })        
      });
      }
      )
      .catch(function (error) { // promise isn't furfilled
        console.error();
      });
  });
})();
// document.getElementById('run').addEventListener('click',()=>{
//     const handleSuccess = (res) => console.table(res);
//     const handleSuccessPost = (res) => window.lib.getComments(res);
//     window.lib.getPosts().then(handleSuccessPost).then(handleSuccess); 
// })
