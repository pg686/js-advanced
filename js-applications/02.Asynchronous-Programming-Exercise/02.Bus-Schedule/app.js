function solve() {
    let spanInfo = document.querySelector('span');
   let btnDepart= document.querySelector('#depart');
   let btnArrive= document.querySelector('#arrive');
   let initial = {
       next:'depot'
   }
    function depart() {
       let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
       fetch(`${baseUrl}/${initial.next}`)
       .then((res) => {
           if(res.ok){
               return res.json();
           }else{
               throw new Error('fdsf')
           }
       })
       .then((data) => {
    
           spanInfo.textContent = `Next stop ${data.name}`;
           initial.next = data.next;
           initial.name = data.name;
           btnDepart.disabled = true;
           btnArrive.disabled = false;
       })
       .catch((err) => {
        spanInfo.textContent = `Error`;
      
        btnDepart.disabled = true;
        btnArrive.disabled = true;
       })
    }

    function arrive() {
        console.log('Arrive TODO...');

    spanInfo.textContent = `Arriving at ${initial.name}`;
           
           btnDepart.disabled = false;
           btnArrive.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();