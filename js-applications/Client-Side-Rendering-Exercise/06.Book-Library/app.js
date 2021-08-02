import {render} from "./../node_modules/lit-html/lit-html.js";
import booksService from "./services/booksService.js";
import { allBooksTemplate, allFormsTemplate, bookLibraryTemplate, formTemplate } from "./templates/booksTemplate.js";

let body  = document.body;
let addForm ={
    id : 'add-form',
    type: 'add',
    title: 'Add Book',
    submitText: 'Submit',
    submitHandler: createBook
}
let editForm ={
    id : 'edit-form',
    type: 'edit',
    title: 'Edit Book',
    submitText: 'Save',
    class: 'hidden',
    submitHandler: editBook,
    idValue: '',
    authorValue: '',
    titleValue: ''
}

let forms = [addForm, editForm];
render(bookLibraryTemplate([],forms ,loadBooks,prepareEdit) , body);
//render(allFormsTemplate(forms), body);
let books=[];
let booksContainer = document.querySelector('#books-container');
async function loadBooks(){
    
    let booksObj = await booksService.getAllBooks();

  books = Object.entries(booksObj).map(([key,val]) => {
    val._id = key;
    return val;
});
render(allBooksTemplate(books,prepareEdit) , booksContainer);

console.log(books);
}

async function createBook(e){
e.preventDefault();
let form= e.currentTarget;
let formData = new FormData(form);
let newBook = {
    author: formData.get('author'),
    title: formData.get('title')
}
let createResult = await booksService.createBook(newBook);
console.log(createResult);
books.push(createResult);
render(allBooksTemplate(books) , booksContainer);
}

async function prepareEdit(e){

let book = e.target.closest('.book');
let id = book.dataset.id;

let bookResult = await booksService.getBook(id);
editForm.class = undefined;
editForm.idValue= id;
editForm.authorValue= bookResult.author;
editForm.titleValue= bookResult.title;

render(bookLibraryTemplate(books,forms,loadBooks,prepareEdit),body)
}

async function editBook(e){
    e.preventDefault();
    let form= e.currentTarget;
    let formData = new FormData(form);
    let id=formData.get('id');
    let newBook = {
        author: formData.get('author'),
        title: formData.get('title')
    }
    let createResult = await booksService.editBook(id,newBook);
    console.log(createResult);
    books=books.filter(x=> x._id !== id);
    books.push(createResult);
    render(allBooksTemplate(books,prepareEdit) , booksContainer);
    }