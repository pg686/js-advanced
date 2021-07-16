const form = document.querySelector('form');
form.addEventListener('submit', (e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    onsubmit([...formData.entries()].reduce((p,[key,val]) => {
        Object.assign(p, { [key] : val});
    },{}));
   }   ));
   async function onsubmit(data){
       const body = JSON.stringify({
           email: data.email,
           password: data.password
       });
       try {
           const response = await fetch('http://localhost:3030/users/login',{
               method: 'post',
               headers: {
                   'Content-Type': 'application/json'
               },
               body
           });
           const data = await response.json();
           if(response.status == 200){
               sessionStorage.setItem('authToken', data.accessToken);
               window.location.pathname = 'index.html'
           }else{
               throw new Error(data.message)
           }
       }catch(err){
           console.error(err.message)
       }
   }