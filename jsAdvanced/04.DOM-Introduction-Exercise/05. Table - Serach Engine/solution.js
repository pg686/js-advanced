function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 

   function onClick() {
      //   TODO:
let stringToSearch = document.getElementById('searchField').value;
let tableRows = [...document.querySelectorAll('table tbody tr')];
tableRows.forEach(el => el.classList.remove('select'));
tableRows.forEach(el =>{
[...el.childNodes].filter((element) => 
   element.textContent.match(stringToSearch)
).map(elm => elm.parentNode.classList.add('select'))
})

document.getElementById('searchField').value = '';
}
}