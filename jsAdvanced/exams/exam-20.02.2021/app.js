function solve(){
   //Todo: Write your code here!
let createBtn = document.querySelector('.btn');

let posts = document.querySelector('.site-content section');
let archiveSection = document.querySelector('.archive-section ol');
createBtn.addEventListener('click' , createArticle)

function createArticle(e){
e.preventDefault();
let creator = document.getElementById('creator');
let title = document.getElementById('title');
let category = document.getElementById('category');
let content = document.getElementById('content');
let creatorText = creator.value;
let titleText = title.value;
let categoryText = category.value;
let contentText = content.value;


let article = document.createElement('article');

let newTitle = document.createElement('h1');
newTitle.textContent = titleText;

let categoryP = document.createElement('p');
let newStrong = document.createElement('strong');
newStrong.textContent= categoryText;
categoryP.textContent  = `Category: `
categoryP.appendChild(newStrong);

let creatorP = document.createElement('p');
let newStrongCreator = document.createElement('strong');
newStrongCreator.textContent= creatorText;
creatorP.textContent  = `Creator: `
creatorP.appendChild(newStrongCreator);

let contentP = document.createElement('p');
contentP.textContent = contentText;

let newDiv = document.createElement('div');
newDiv.className ='buttons';

let newDelBtn = document.createElement('button');
newDelBtn.textContent = 'Delete';
newDelBtn.className = 'btn delete';
newDelBtn.addEventListener('click' , deleteButton)
let newArchiveBtn = document.createElement('button');
newArchiveBtn.textContent = 'Archive';
newArchiveBtn.className ='btn archive';   
newArchiveBtn.addEventListener('click', archiveArticle)

newDiv.appendChild(newDelBtn);
newDiv.appendChild(newArchiveBtn);

article.appendChild(newTitle);
article.appendChild(categoryP);
article.appendChild(creatorP);
article.appendChild(contentP);
article.appendChild(newDiv);
posts.appendChild(article)
}
function deleteButton(e){
e.target.parentElement.parentElement.remove()
}

function archiveArticle(e){
   let currentDiv = e.target.parentElement.parentElement;
   let currentArticleTitle = currentDiv.querySelector('h1').textContent;

   let newLiArcchive = document.createElement('li');
   newLiArcchive.textContent = currentArticleTitle;

   archiveSection.appendChild(newLiArcchive);
   Array.from(archiveSection.children).sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(x => archiveSection.appendChild(x));
   currentDiv.remove();

}
}
