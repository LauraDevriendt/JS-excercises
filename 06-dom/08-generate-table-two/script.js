/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById('target').innerHTML = "<table><tbody id='tbody'></tbody></table>";
    let tbody = document.getElementById('tbody');
    let rowNum = 10;
    let colNum = 10;

    for (let i=0;i<rowNum;i++){
        //create rows
        let row = tbody.insertRow(i);
        //create columns (table data) in each row
        for (let j=0;j<colNum;j++){
            let cell = row.insertCell(j);
            cell.innerHTML = (j+1)*(i+1);
        }
    }