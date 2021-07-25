import {render} from "./../node_modules/lit-html/lit-html.js";
import {towns} from "./towns.js";
import {allTowns } from "./templates/townsTemplate.js"
let root = document.querySelector('#towns');

render(allTowns(towns),root);


let input = document.querySelector('#searchText');
let searchBtn = document.querySelector('article button');
let result = document.querySelector('#result');

searchBtn.addEventListener('click' , search)

function search() {
   // TODO
   let allLi = [...root.querySelectorAll('li')];

   let inputText = input.value;
 allLi.filter(el => el.textContent.toLowerCase().includes(inputText.toLowerCase()) ).map(el => el.classList.add('active'));
 allLi.filter(el => !el.textContent.toLowerCase().includes(inputText.toLowerCase()) ).map(el => el.classList.remove('active'));
 let count =  allLi.filter(el => el.textContent.toLowerCase().includes(inputText.toLowerCase()) ).length;
 result.textContent = `${count} matches found`;

}
