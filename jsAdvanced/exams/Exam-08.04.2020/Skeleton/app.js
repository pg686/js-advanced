function solve() {
    console.log("//TODO")

    // add event listener to add button
    // when it is clicked validate input fields only if there isnt an empty field
    //create article and append "start" and "delete" buttons
    // add the new article to open section

let addButton = document.getElementById('add');
let openSection = document.querySelectorAll('section')[1];
let inProgressSection = document.querySelectorAll('section')[2];
let completeSection = document.querySelectorAll('section')[3];
addButton.addEventListener('click',addFunctionality)



function addFunctionality(e) {
    e.preventDefault();
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    if(task.value.trim() !== '' &&
    description.value.trim() !== ''&&
    date.value.trim() !== '' ){
let newArticle = document.createElement('article');

let h3 = document.createElement('h3');
h3.textContent =task.value;

let descriptionP = document.createElement('p');
descriptionP.textContent= `Description: ${description.value}`;

let dateP = document.createElement('p');
dateP.textContent=`Due Date: ${date.value}`

newDiv = document.createElement('div');
newDiv.classList.add("flex");

let startBtn = document.createElement('button');
startBtn.textContent ='Start';
startBtn.classList.add("green");
startBtn.addEventListener('click', startFunctionality)


let deleteBtn = document.createElement('button');
deleteBtn.textContent ='Delete';
deleteBtn.classList.add("red");
deleteBtn.addEventListener('click',deleteFunc);

newDiv.appendChild(startBtn);
newDiv.appendChild(deleteBtn);



newArticle.appendChild(h3);
newArticle.appendChild(descriptionP);
newArticle.appendChild(dateP);
newArticle.appendChild(newDiv);


let secondDiv = openSection.querySelectorAll('div')[1];
secondDiv.appendChild(newArticle)

    }

}
function startFunctionality(e) {
    let parent = e.target.parentElement.parentElement;
    let divProgress =inProgressSection.querySelectorAll('div')[1];
  let curArticle = document.createElement('article');
  
    let taskh3 = parent.querySelector('h3');
   let firstP = parent.querySelectorAll('p')[0];
   let secondP = parent.querySelectorAll('p')[1];

   let deleteButtn = parent.querySelectorAll('button')[1];


   let finishBtn =  document.createElement('button');
   finishBtn.textContent ='Finish';
   finishBtn.classList.add("orange");
   finishBtn.addEventListener('click',finishFunctionality)
let outerDiv = document.createElement('div');
outerDiv.classList.add('flex')

curArticle.appendChild(taskh3);
curArticle.appendChild(firstP);
curArticle.appendChild(secondP);
outerDiv.appendChild(deleteButtn);
outerDiv.appendChild(finishBtn);
curArticle.appendChild(outerDiv)
    divProgress.appendChild(curArticle)
    parent.remove()
}


function finishFunctionality(e) {
    let parent = e.target.parentElement.parentElement;
    let divProgress =completeSection.querySelectorAll('div')[1];
  let curArticle = document.createElement('article');
  
    let taskh3 = parent.querySelector('h3');
   let firstP = parent.querySelectorAll('p')[0];
   let secondP = parent.querySelectorAll('p')[1];
   curArticle.appendChild(taskh3);
curArticle.appendChild(firstP);
curArticle.appendChild(secondP);
divProgress.appendChild(curArticle);
parent.remove()
}

function deleteFunc(e) {
    let parent = e.target.parentElement.parentElement;
    parent.remove()
}
}
