import {render} from "./../node_modules/lit-html/lit-html.js";
import {allCatsTemplate} from "./templates/catsTemplates.js"
import {cats} from "./catSeeder.js"

function clickBtn(e){
    let btn = e.target;
    let parentEl = btn.parentElement;
    let hiddenDiv = parentEl.querySelector('.status');
    btn.textContent = btn.textContent === 'Show status code' ? 'Hide status code' : 'Show status code';
    if(btn.textContent ==='Show status code' ){
        hiddenDiv.classList.add('hidden');
    }else{
        hiddenDiv.classList.remove('hidden');
    }
}


let allCats = document.querySelector('#allCats');
render(allCatsTemplate(cats,clickBtn), allCats)
