function loadCommits() {
    // Try it with Fetch API
    console.log('TODO...');
    let button = document.querySelector('body button');
    let commitsUl = document.querySelector('#commits');
    button.addEventListener('click', add);


    function  add()  {
        
        let inputUsername = document.querySelector('#username');
        let inputRepo = document.querySelector('#repo');
        let username = inputUsername.value;
        let repo = inputRepo.value;
        const baseUrl = 'https://api.github.com/repos';
        fetch(`${baseUrl}/${username}/${repo}/commits`)
        .then((res) => 
         {
            if(res.ok){
return res.json();
            }else{
                console.log(res.status)
               // console.log(res.statusText)
                throw new Error(res.status);
            }
        })
        
        .then((data) => { 
            commitsUl.innerHTML= '';
           // console.log(data)
data.forEach(element => {
   let result = createEl(element.commit.author.name,element.commit.message);
commitsUl.appendChild(result);
});
        })
        .catch((err) => {
            commitsUl.innerHTML= '';     
let newLi = createEl(err.message);
commitsUl.appendChild(newLi);
        });
        inputUsername.value = '';
        inputRepo.value = '';
    }
    function createEl(firstArg, commitMessage){
        let liEl = document.createElement('li');
        liEl.textContent =   commitMessage === undefined ? `Error: ${firstArg} (Not Found)` : `${firstArg}: ${commitMessage}`;
        return liEl;
    }
}