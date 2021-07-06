function solution() {
    window.addEventListener('load', function() {
    //TODO .....
    let main = document.querySelector('#main');
    let baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
fetch(baseUrl)
.then((res) => res.json())
.then((data) => {
    data.map(element => {
        console.log(element.id);
        console.log(element.title)
        let resultDiv = createElement(element._id, element.title);
main.appendChild(resultDiv);
    })
});
    });

function createElement(elementId, elementTitle){
    let div1  = document.createElement('div');
    div1.classList.add('accordion');

    let div2  = document.createElement('div');
    div2.classList.add('head');

    let spanEl = document.createElement('span');
    spanEl.textContent = elementTitle;

    let btn = document.createElement('button');
    btn.textContent = 'More'
    btn.setAttribute('id', elementId);
    btn.addEventListener('click', appendExtra)

    div2.appendChild(spanEl);
    div2.appendChild(btn);


    let div3  = document.createElement('div');
    div3.classList.add('extra');

    let paragraph = document.createElement('p');
    paragraph.textContent= '';

    div3.appendChild(paragraph);

div1.appendChild(div2);
div1.appendChild(div3);

return div1;
}


function appendExtra(e){
    let div1Element  = e.target.parentElement.parentElement;
    let paragraphExtra = div1Element.querySelector('.extra p');
    let divExtra = div1Element.querySelector('.extra');
    let idValue = e.target.id;
    console.log(idValue)
    fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${idValue}`)
    .then((result) => {
        if(result.ok){
            return result.json();
        }else{
            throw new Error('Error');
        }
    })
    .then((data) => {
        if(e.target.textContent === 'More'){
           divExtra.style.display= 'block';
        paragraphExtra.textContent = data.content;
        e.target.textContent = 'Less';
        }else{
            divExtra.style.display= 'none';
            paragraphExtra.textContent = '';
            e.target.textContent = 'More';
        }
    }).catch((err) => console.log(err));


}

  //        <!-- <div class="accordion">
  //        <div class="head">
  //            <span>Scalable Vector Graphics</span>
  //            <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
  //        </div>
  //        <div class="extra">
  //            <p>Scalable Vector Graphics .....</p>
  //        </div>
  //    </div> -->
}
solution();