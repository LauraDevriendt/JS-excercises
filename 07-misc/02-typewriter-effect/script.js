/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let i=0;
    let target =document.getElementById('target')
    let text =target.innerHTML
    console.log(target)
    console.log(text)
    
   
    target.innerHTML="";

   function writeEffect(){
      
   if(i<text.length){
       target.innerHTML+= text[i];
       i++
       setTimeout(writeEffect,Math.floor(Math.random() * 500))
   }
   };

  
   writeEffect();
})();

