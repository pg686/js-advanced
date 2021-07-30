
import {render} from "./../node_modules/lit-html/lit-html.js";
import {allRows } from "./templates/tableTemplate.js"




 

 function solve() {
async function loadElements(){
   
   let tbody = document.querySelector('.container tbody');
let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
let dataObj = await  response.json();
let students = Object.values(dataObj).map(s => ({
 name: `${s.firstName} ${s.lastName}`,
 course: s.course,
 email: s.email
}))
render(allRows(students), tbody);
}
 loadElements();
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:  
      let searchField = document.querySelector('#searchField');
      let tbodyEl = document.querySelector('.container tbody');
let searchText = searchField.value.toLowerCase();
let tdAll = [...tbodyEl.querySelectorAll('tr')];
tdAll.filter(el => el.textContent.toLowerCase().includes(searchText)).map(el => el.classList.add('select'));
tdAll.filter(el => !el.textContent.toLowerCase().includes(searchText)).map(el => el.classList.remove('select'));
console.log(filtered)
   }
}

solve();