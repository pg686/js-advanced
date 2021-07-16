const form = document.querySelector('form');
form.addEventListener('submit', (e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    onsubmit([...formData.entries()].reduce((p,[key,val]) =>{
        Object.assign(p, { [key]: val});
    },{}))
}));

    async function onsubmit(data){
        let body = JSON.stringify({
            name: data.name,
            img: data.img,
            ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(el => el != ''),
            steps:data.steps.split('\n').map(el => el.trim()).filter(el => el != '')
        });
        const token = sessionStorage.getItem('authToken');
        if(token === null){
            return window.location.pathname = 'index.html'
        }
        try{
            const response = await fetch('http://localhost:3030/data/recipes', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': token
                },
                body
            });
            if(response.status == 200){
                window.location.pathname = 'index.html';
            }else{
                throw new Error(await response.json());
            }
        }catch(err){
console.error(err.message);
        }
    }

