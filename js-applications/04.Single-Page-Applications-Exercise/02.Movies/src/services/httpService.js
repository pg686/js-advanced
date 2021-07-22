import auth from "./authService.js";

export  async function jsonRequest(url, method, body, isAuthorized, skipResult){
 
    let headers = {};

    if(method === undefined ){
        method = 'Get';
    }

    if(['post', 'put' , 'delete'].includes(method.toLowerCase())){
        headers['Content-Type'] = 'application/json';
    }

    if(isAuthorized){
        headers['X-Authorization'] = auth.getAuthToken();
    }

    let options = {
        method,
        headers
    }

    if(body !== undefined){
    options.body = JSON.stringify(body);

    }

    let response = await fetch(url,options);
if(!response.ok){
    let message = await response.text();
    throw new Error(`${response.status}: ${response.statusText}\n${message}`);
}

let result = undefined;
if(!skipResult){
result =await response.json();

}
return result;
}