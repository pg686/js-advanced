function getInfo() {
    console.log("TODO...");
    let submitBtn = document.querySelector('#submit');
    let stopName = document.querySelector('#stopName');
    let ulList = document.querySelector('#buses');
    submitBtn.addEventListener('click', function(){
        const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
        let input = document.querySelector('#stopId');
        let stopId = input.value;
        fetch(`${baseUrl}/${stopId}`)
        .then((res) => {
            if(res.ok){
                return res.json();
            }else{
                throw new Error('Error')
            }
        })
        .then((data) => {
            ulList.innerHTML='';
            console.log(data);
            stopName.textContent = data.name;
            
            Object.entries(data.buses).map(([key,val]) => {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${key} arrives in ${val} minutes`;
            ulList.appendChild(newLi);
            });
        })
        .catch((error) => {
            ulList.innerHTML='';
            stopName.textContent ='Error';
        });
        input.value = '';
    })
}