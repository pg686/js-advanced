import {render} from "./../node_modules/lit-html/lit-html.js";
import {allTownsTemplate} from "./templates/townTemplates.js"
let form = document.querySelector('form');
form.addEventListener('submit' ,displayTowns);

let rootEl = document.querySelector('#root');
function displayTowns(e){
e.preventDefault();
let formEl = e.currentTarget;
let formData = new FormData(formEl);

let towns = formData.get('towns');
let allTowns = towns.split(', ');

render(allTownsTemplate(allTowns),rootEl)

}