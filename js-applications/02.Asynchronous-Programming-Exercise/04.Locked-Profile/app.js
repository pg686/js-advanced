function lockedProfile() {
    console.log('TODO...');
    let counter = 1;
    let main = document.querySelector('#main');
    let baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    fetch(`${baseUrl}`)
    .then((res) => {
        if(res.ok){
            return res.json();
        }else{
            throw new Error('vds')
        }
    })
    .then((data) => {
        Object.values(data).map((element) => {
      
let newProfil = createProfile(element.username,element.email,element.age);
let showBtn = newProfil.querySelector('div button');
showBtn.addEventListener('click', showMore)
main.appendChild(newProfil);
        });
    })

    function createProfile(username,email, age){
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
        profileDiv.innerHTML =`
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${username}" disabled readonly />
        <div id="user${counter}HiddenFields">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user1Age" value="${age}" disabled readonly />
        </div>
        <button>Show more</button>
    `;
    counter++;
return profileDiv;


    }
    

    function showMore(e){
        let parentDiv = e.target.parentElement;
        console.log(parentDiv)
        let hiddentDiv = parentDiv.querySelector('div');
        console.log(hiddentDiv)
        let inputs = parentDiv.querySelectorAll('input[type=radio]');
        hiddentDiv.style.display = inputs[1].checked ? 'block': 'none';
        
    }
}