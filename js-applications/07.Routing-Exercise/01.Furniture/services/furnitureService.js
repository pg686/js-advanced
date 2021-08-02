import { jsonRequest } from "../helpers/jsonRequest.js";

let baseUrl = '';

async function getAll(){
    let result = await jsonRequest(baseUrl);
    return result;
}


async function get(id){
    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;
}
async function create(item){
    let result = await jsonRequest(baseUrl , 'Post', item, true );
    return result;
}

async function update(item){
    let result = await jsonRequest(`${baseUrl}/${id}` , 'Put', item, true );
    return result;
}

async function deleteItem(id){
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true)
return result;
}
export default {
    getAll,
    get,
    create,
    update,
deleteItem
}