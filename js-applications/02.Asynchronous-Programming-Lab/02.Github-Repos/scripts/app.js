function loadRepos() {
	console.log("TODO...");
	let button = document.querySelector('body button');
	let listRepos = document.querySelector('#repos');
	button.addEventListener('click' , function() {
		listRepos.innerHTML = '';
		let input = document.querySelector('#username');
		let usernameVal = input.value;
		let baseUrl = 'https://api.github.com/users/';
		fetch(`${baseUrl}${usernameVal}/repos`)
		.then((response) => {
			if(response.ok){
			return response.json()
			}
		})
		.then((data) => {
		console.log(data)
		data.forEach(element => {
			let resultLi = createEl(element.full_name,element.html_url);
			listRepos.appendChild(resultLi)
		})})
		.catch((error) =>console.log(error));
		input.value ='';
	})

function createEl(fullName, htmlUrl){
	let newLi = document.createElement('li');
	let newA = document.createElement('a');
	newA.href = htmlUrl;
	newA.textContent = fullName;
	newLi.appendChild(newA);
	return newLi;
}
}

//  <a href="{repo.html_url}">
//{repo.full_name}
//</a>