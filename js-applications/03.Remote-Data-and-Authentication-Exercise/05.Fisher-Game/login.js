let regForm = document.querySelector('#register-form');
regForm.addEventListener('submit', register);
let loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', login)

function register(e){
    e.preventDefault();
let form = e.currentTarget;
let formData = new FormData(form);

let password = formData.get('password');
let resPass = formData.get('rePass');

if(password !== resPass){
    console.error('Passwords dont match');
}
let body = JSON.stringify({
    email: formData.get('email'),
    password
});

fetch('http://localhost:3030/users/register',{
    method: 'post',
    headers: {
     'Content-Type': 'application/json'
  },
  body
}).then((res) => {
    if(res.ok){
        return res.json();
    }
}).then((data) => {
    console.log(data);
    localStorage.setItem('token', data.accessToken);
   location.assign('./index.html');
})
}

function login(e){
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);

    let body = JSON.stringify({
        email: formData.get('email'),
        password:formData.get('password')
    });
    fetch('http://localhost:3030/users/login',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
         },
         body
    })
    .then((res) => {
        if(res.ok){
            return res.json();
        }
    }).then((data) =>{
        console.log(data.accessToken)
        console.log(data._id)
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('id', data._id);
        location.assign('./index.html');
    })

}

//<label>E-mail: <input type="text" name="email"></label>
//<label>Password: <input type="password" name="password"></label>
//<label>Repeat: <input type="password" name="rePass"></label>