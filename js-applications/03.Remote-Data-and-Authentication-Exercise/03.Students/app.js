console.log('TODO...');
let form = document.querySelector('form');
let tableBody = document.querySelector('tbody');
window.addEventListener('load', function(){
    
    fetch(`http://localhost:3030/jsonstore/collections/students`)
    .then((res) => {
        if(res.ok){
            return res.json();
        }else{
            throw new Error()
        }
    })
    .then((data) => {
        Object.values(data).map(el => {
            let newItem = createNewItem(el._id, el.firstName,el.lastName,el.facultyNumber,el.grade);
            tableBody.appendChild(newItem);
        })
    })
})
form.addEventListener('submit', function(e){
    e.preventDefault();
let formEl = e.currentTarget;
let formData = new FormData(formEl);
let body = JSON.stringify({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    facultyNumber: formData.get('facultyNumber'),
    grade: formData.get('grade'),
});
if(firstName === '' || lastName === '' || facultyNumber === '' || grade === '' || isNaN(facultyNumber) || isNaN(grade)){
    throw new Error('Please enter a valid input');
}
fetch(`http://localhost:3030/jsonstore/collections/students`,{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
     },
     body
}).then((res) =>{
    if(res.ok){
        return res.json();
    }else{
        throw new Error('')
    }
}).then((el) =>{
    let newItem = createNewItem(el._id, el.firstName,el.lastName,el.facultyNumber,el.grade);
    tableBody.appendChild(newItem);
});
e.target.parentNode.reset();

})
function createNewItem(id,firstName, lastName, facultyNumber, grade){
    let newTr = document.createElement('tr');
    newTr.dataset.id = id;

    let td1 = document.createElement('td');
    td1.textContent = firstName;

    let td2 = document.createElement('td');
    td2.textContent = lastName;

    let td3 = document.createElement('td');
    td3.textContent = facultyNumber;

    let td4 = document.createElement('td');
    td4.textContent = grade;

    newTr.appendChild(td1);
    newTr.appendChild(td2);
    newTr.appendChild(td3);
    newTr.appendChild(td4);

    return newTr;

}