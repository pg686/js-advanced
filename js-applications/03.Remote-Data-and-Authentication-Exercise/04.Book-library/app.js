console.log('My requests...')
let loadBtn = document.querySelector('#loadBooks');
let form = document.querySelector('form');

form.addEventListener('submit', submitHandler);
function editFunc(e){
let currentBook = e.target.closest('.book');
let currentTitle = currentBook.querySelector('.title');
let currentAuthor = currentBook.querySelector('.author');
 form.dataset.entryId = currentBook.id;
 form.dataset.isEdit = true;
let formH3 = form.querySelector('h3');
formH3.textContent='Edit Form'
let inputTitle = form.querySelector('input[name="title"]')
let inputAuthor = form.querySelector('input[name="author"]')
inputTitle.value = currentTitle.textContent;
inputAuthor.value = currentAuthor.textContent;



}

function submitHandler(e)
{
    e.preventDefault();
    let form1 = e.currentTarget;
    let formData = new FormData(form1 );
    let id = form1.dataset.entryId;
    if(form1.dataset.isEdit !== undefined){

        fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
            method:'put',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               title: formData.get('title'),
               author: formData.get('author'),
      
            })
    })
    form1.dataset.isEdit = undefined;
    form1.dataset.entryId = undefined;
    form1.querySelector('h3').textContent = 'Form'

}else{
    fetch('http://localhost:3030/jsonstore/collections/books', {
        method:'post',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           title: data.get('title'),
           author: data.get('author')
        })
    })

    }
    

}
loadBtn.addEventListener('click', getAllBooks);
let allBooks = document.querySelector('tbody');

async function getAllBooks(){
    try{
        allBooks.querySelectorAll('tr').forEach(el => el.remove());
    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    let data = await response.json();
   Object.values(data).map( el => {
    let newTr  = document.createElement('tr');
    newTr.setAttribute('id', el._id);
    newTr.classList.add('book');
    let td1  = document.createElement('td');
    td1.classList.add('title');
    td1.textContent = el.title;

    let td2  = document.createElement('td');
    td2.textContent = el.author;
    td2.classList.add('author');
    let td3  = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click' , editFunc);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteBook)
    td3.appendChild(editBtn);
    td3.appendChild(deleteBtn);

    newTr.appendChild(td1);
    newTr.appendChild(td2);
    newTr.appendChild(td3);
    console.log(newTr);
allBooks.appendChild(newTr);
    
   })

    }catch(err){
        console.error(err)
    }

}

function deleteBook(e){
    let currentBook = e.target.closest('.book');

let currentId = currentBook.id;
fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}` , {
    method: 'delete'
}).then((res)=> {
    if(res.ok){
        currentBook.remove();
    }
}).catch((err) => console.error(err))

}
//<tbody>
//            <tr>
//                <td>Harry Poter</td>
//                <td>J. K. Rowling</td>
//                <td>
//                    <button>Edit</button>
//                    <button>Delete</button>
//                </td>
//            </tr>