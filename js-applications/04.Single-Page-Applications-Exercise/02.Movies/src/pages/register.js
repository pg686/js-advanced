import auth from "../services/authService.js";

let section = undefined;

export function initialize(pathSection){
section = pathSection;
let form = section.querySelector('form');
form.addEventListener('submit', handleRegister)
}


export async function getView(){
return section;
}


async function handleRegister(e){
    e.preventDefault();
    try{
    let form = e.currentTarget;
    let formData = new FormData(form);
    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('repeatPassword');

    if(email.trim() === '' || password.trim() === ''){
        return;
    }
let registerNew = {
    email,
    password
}
 await auth.registerUser(registerNew);
form.reset();
 
    }catch(err){
        console.error(err);
        alert(err.message);
    }

  
}
let registerPage = {
    initialize,
    getView
}
export default registerPage;