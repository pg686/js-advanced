let loadBtn = document.querySelector('.load');
let catchesList = document.querySelector('#catches');
loadBtn.addEventListener('click', loadFunc);
let addBtn = document.querySelector('.add');
addBtn.addEventListener('click', addCatch);


function loadFunc(){
    catchesList.innerHTML ='';
    fetch('http://localhost:3030/data/catches')  
    .then((res) => {
        if(res.ok){
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
       data.map((el) =>{
let newElement = createElement(el._ownerId,el.angler,el.weight,el.species,el.location,el.bait,el.captureTime,el._createdOn,el._id);
catchesList.appendChild(newElement)
        } )
    })
}
function createElement(ownerId, angler, weight,  species, location, bait, captureTime, created , id){
let divEl = document.createElement('div');
divEl.classList.add('catch');
divEl.dataset.ownerId = ownerId;
divEl.dataset.id = id;
divEl.dataset.createdOn = created;

// I'm using innerHtml to cut down the time spend for creating new elements , creating elements with  innerHTML is bad practice 
divEl.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${angler}" />
<hr>
<label>Weight</label>
<input type="number" class="weight" value="${weight}" />
<hr>
<label>Species</label>
<input type="text" class="species" value="${species}" />
<hr>
<label>Location</label>
<input type="text" class="location" value="${location}" />
<hr>
<label>Bait</label>
<input type="text" class="bait" value="${bait}" />
<hr>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${captureTime}" />
<hr>
<button class="update">Update</button>
<button class="delete">Delete</button>`;
let updateBtn = divEl.querySelector('.update');
updateBtn.addEventListener('click', addCatch)

let deleteBtn = divEl.querySelector('.delete');
deleteBtn.addEventListener('click', deleteFunc);

return divEl;
}



function deleteFunc(e){
let parentEl = e.target.parentElement;
let ownerId = parentEl.dataset.ownerId;
let elementID = parentEl.dataset.id;
if(localStorage.getItem('id') === ownerId){
    fetch(`http://localhost:3030/data/catches/${elementID}`,{
        method: 'delete',
        headers: {
            'X-Authorization': localStorage.getItem('token')
         
         },
    }).then((res) =>{
        if(res.ok){
            parentEl.remove();
        }
    })
}
}

function addCatch(e){
let parentEl = e.target.parentElement;
let angler = parentEl.querySelector('.angler');
let weight = parentEl.querySelector('.weight');
let species = parentEl.querySelector('.species');
let location = parentEl.querySelector('.location');
let bait = parentEl.querySelector('.bait');
let captureTime = parentEl.querySelector('.captureTime');


//console.log(localStorage.getItem('id')  )
let newObj = {
    angler: angler.value,
    weight:weight.value,
    species :  species.value,
    location : location.value,
    bait  :bait.value,
    captureTime :captureTime.value,
   
}

if(e.target.textContent.toLowerCase() == 'update'){

    let currentId = parentEl.dataset.id;
let currentUser =localStorage.getItem('id');
let divId = parentEl.dataset._ownerId;

console.log(parentEl.dataset.ownerId)
  //  console.log(divId) ;
  //  console.log(currentUser) ;
   if( localStorage.getItem('id') === parentEl.dataset.ownerId){
    fetch(`http://localhost:3030/data/catches/${currentId}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token')
         
         },
         body: JSON.stringify(Object.assign(newObj, { _ownerId: parentEl.dataset.ownerId}))
        })
    }



}else if(e.target.textContent.toLowerCase() == 'add')
fetch('http://localhost:3030/data/catches', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'X-Authorization': localStorage.getItem('token')
     },
     body: JSON.stringify(Object.assign(newObj, { _ownerId: localStorage.getItem('id')}))
}).then((res) => {
    if(res.ok){
        return res.json();
    }
}).then((el) =>{
    let newEl =  createElement(el._ownerId,el.angler,el.weight,el.species,el.location,el.bait,el.captureTime,el._createdOn,el._id);
    catchesList.appendChild(newEl);
})

}
