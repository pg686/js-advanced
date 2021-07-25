import {render} from "./../node_modules/lit-html/lit-html.js";
import {allOptions} from "./templates/optionsTemplate.js"

let menu = document.querySelector('#menu');


async function loadAllOptions(){
    let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
let dataObj = await response.json();
let options = Object.values(dataObj);
render(allOptions(options), menu);
}
loadAllOptions();

let formElement = document.querySelector('#form-element');
formElement.addEventListener('submit', addItem);
function addItem(e) {
   e.preventDefault();

 let text = document.querySelector('#itemText');
   let newObj = {
       text: text.value
   }
   text.value = '';
fetch('http://localhost:3030/jsonstore/advanced/dropdown',{
method: 'post',
headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newObj)
}
)
.then((res) => {
    if(res.ok){
     loadAllOptions();
    }
})
}