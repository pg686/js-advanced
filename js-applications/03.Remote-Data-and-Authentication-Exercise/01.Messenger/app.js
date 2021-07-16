function attachEvents() {
    console.log('TODO...');
    let submitBtn = document.querySelector('#submit');
    let refreshBtn = document.querySelector('#refresh');
    let author = document.querySelector('#author');
    let content = document.querySelector('#content');
    let textarea = document.querySelector('#messages');

    console.log(author.value);
    console.log(content.value);
    submitBtn.addEventListener('click', submitData);
    refreshBtn.addEventListener('click', getAllMessages);

    async function getAllMessages(){
try{
        let baseUrl = 'http://localhost:3030/jsonstore/messenger';
let response = await fetch(baseUrl);
let data  = await response.json();

textarea.value = Object.values(data).map(element => `${element.author}: ${element.content}`).join('\n');
}catch(err){
    console.error(err)
}
    }

    async function submitData(){
        try{

       let body = JSON.stringify({
           
  author: author.value,
  content: content.value,

       })
       let result = await  fetch('http://localhost:3030/jsonstore/messenger' , {
           method: 'post',
           headers: {
            'Content-Type' : 'application/json'
        },
        body
       });
       let  create = await result.json();
        textarea.value += `\n${create.author}: ${create.content}`;
    }catch(err){
        console.error(err)
    }
}

}

attachEvents();