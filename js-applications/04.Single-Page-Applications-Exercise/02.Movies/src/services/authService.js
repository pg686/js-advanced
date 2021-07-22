import { jsonRequest } from "./httpService.js";  

async function login(){

}

async function logout(){

}

async function register(newUser){
    try{
let registerResult = await jsonRequest('http://localhost:3030/users/register', 'post', newUser);
localStorage.setItem('authToken', registerResult.accessToken);
localStorage.setItem('userId', registerResult._id);
localStorage.setItem('userEmail', registerResult.email);
nav.loginUser();
}catch(err){
    alert(err);
}

}

function isLoggedIn(){
    return localStorage.getItem('authToken') !== null && 
    localStorage.getItem('authToken') !== undefined;
}

function getUserName(){
    return localStorage.getItem('userEmail');
}

function getUserId(){
    return localStorage.getItem('userId');
}


function getAuthToken(){
    return localStorage.getItem('authToken');
}


let auth = {
    login,
    logout,
    register,
    isLoggedIn,
    getAuthToken,
    getUserId,
    getUserName
}


export default auth;