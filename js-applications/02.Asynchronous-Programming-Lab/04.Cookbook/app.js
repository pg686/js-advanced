let mainBody = document.querySelector('body main');

window.addEventListener('load', function (){
    let baseUrll = 'http://localhost:3030/jsonstore/cookbook/recipes';
    fetch(`${baseUrll}`)
    .then((res) => {
        if(res.ok){
            return res.json();
        }
    })
    .then((data) => {
        console.log(Object.values(data));
      Object.values(data).forEach(element => {
          console.log(element.name)
          console.log(element.img)
          let newLi = createArticle(element.name,element.img)
          mainBody.appendChild(newLi)
      });  
    })
    .catch((err) => console.log(err))

} );



function createArticle(title,imgSrc){
let newArticle = document.createElement('article');
newArticle.classList.add('preview');

let divTitle = document.createElement('div');
divTitle.classList.add('title');
let h2Title = document.createElement('h2');
h2Title.textContent = `${title}`;
divTitle.appendChild(h2Title);

let divimg = document.createElement('div');
divimg.classList.add('small');
let newImg = document.createElement('img');
newImg.src = `${imgSrc}`;
divimg.appendChild(newImg);

newArticle.appendChild(divTitle);
newArticle.appendChild(divimg);

return newArticle;
}

// <article class="preview">
//<div class="title">
//<h2>Title</h2>
//</div>
//<div class="small">
//<img src="assets/lasagna.jpg">
//</div>
//</article>