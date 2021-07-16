function attachEvents() {
    console.log('TODO...');
    let load = document.querySelector('#btnLoad');
    let btnCreate = document.querySelector('#btnCreate');
btnCreate.addEventListener('click', createRecord);
    let numberList = document.querySelector('#phonebook');
    load.addEventListener('click', function(){
        fetch('http://localhost:3030/jsonstore/phonebook')
        .then((res) =>{
            if(res.ok){
                return res.json();
            }
        }).then((data) =>{
            numberList.querySelectorAll('li').forEach(el => el.remove())
            Object.values(data).map(el=>{
let newLi = createLi(el._id,el.person,el.phone);

numberList.appendChild(newLi)

            })
        })
    });
    function createRecord(){
       let personName = document.querySelector('#person'); 
       let personPhone = document.querySelector('#phone'); 
       fetch('http://localhost:3030/jsonstore/phonebook',{
           method: 'post',
           headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            person: personName.value,
            phone: personPhone.value
         })}).then((res) => {
             if(res.ok){
                 return res.json();
             }
         }).then((data) => {
             console.log(data)
             let newLi = createLi(data._id,data.person,data.phone);

numberList.appendChild(newLi);

         })
      
         personName.value  ='';
         personPhone.value ='';
    }
    function createLi(id, person,phoneNew){
        let newLi = document.createElement('li');
newLi.dataset.id = id;

let personName = person;
let phone = phoneNew;
let newBtn = document.createElement('button');
newBtn.textContent = 'Delete';
newBtn.addEventListener('click', deleteEl)


newLi.textContent = `${personName}: ${phone}`;
newLi.appendChild(newBtn);
return newLi;
    }
    function deleteEl(e){
let parentEl = e.target.parentElement;
let currentId = parentEl.dataset.id;
fetch(`http://localhost:3030/jsonstore/phonebook/${currentId}` , {
    method: 'delete'
}).then((res)=> {
    if(res.ok){
        parentEl.remove();
    }
}).catch((err) => console.error(err))
    }

}

attachEvents();