function sumTable() {
let rows = [...document.querySelectorAll('table tr')].slice(1,-1);
document.getElementById('sum').textContent = rows.reduce((curr, acc) =>{
return curr + Number(acc.lastElementChild.textContent)
},0)
}