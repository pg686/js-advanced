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
    class: 'hidden'
}

let forms = [addForm, editForm];
render(bookLibraryTemplate([],forms ,loadBooks) , body);
//render(allFormsTemplate(forms), body);
let books=[];
let booksContainer = document.querySelector('#books-container');
async function loadBooks(){
    
    let booksObj = await booksService.getAllBooks();

  books = Object.entries(booksObj).map(([key,val]) => {
    val._id = key;
    return val;
});
render(allBooksTemplate(books) , booksContainer);

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