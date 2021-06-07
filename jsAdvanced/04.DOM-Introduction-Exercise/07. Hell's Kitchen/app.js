function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputText =document.querySelector('#inputs textarea').value;
      let input = JSON.parse(inputText);
      let restourants = {};
      for(let el of input){

         let [restourantName, workers] = el.trim().split(" - ");
         restourantName =restourantName.match('[A-Za-z]+');

         //let currentWorkers = workers.match('([A-Za-z]+\s[\d]+)')
         let arrWorkers =  workers.split(", ");
       let newArr =   arrWorkers.reduce((acc, curr) => {
        let [key,val] =   curr.split(" ");
        let convertedVal = /([\d]+)/gm.exec(val);
         acc.push({workerName: key, workerSalary: Number(convertedVal[1])});
         return acc;
         }, [] );
         if(!restourants[restourantName]){
           restourants[restourantName] =  createObj(newArr);
                  
         }else{
            restourants[restourantName].workers =restourants[restourantName].workers.concat(newArr);
          
         }




      }
      let bestRestourant = Object.entries(restourants).sort((a,b) => b[1].avarageSalary() - a[1].avarageSalary())[0];


      //   TODO:
      document.querySelector('#bestRestaurant p').textContent = formattingBestRestourant(bestRestourant);
      document.querySelector('#workers p').textContent = formattingWorkers(bestRestourant[1].workers);
    
   }
   function createObj(workers){
return {
   
   workers:workers,
   avarageSalary,
   bestSalary: function() {
return this.workers.reduce((acc,curr) => {
 
if(acc < curr.workerSalary){
   acc = curr.workerSalary
}
return acc;
}, 0)
   }
}
   }

   function avarageSalary() {
      let sum = this.workers.reduce((acc,curr) => {
         return acc + curr.workerSalary
      },0);
      return sum/this.workers.length;
   }
   function getBestRestouranat(restourants){
      return restourants.sort((a,b) => b.avarageSalary() - a.avarageSalary() )[0];
   }
   function formattingBestRestourant(bestRestourant) {
      let string = 'Name: '+bestRestourant[0]+ ' Average Salary: '+bestRestourant[1].avarageSalary().toFixed(2)+ ' Best Salary: ' +bestRestourant[1].bestSalary().toFixed(2);
   return string;
}
function formattingWorkers(workers){
   let formated='';
     workers.sort((a,b) => b.workerSalary- a.workerSalary).forEach((element,index) => {
      formated += `Name: ${element.workerName} With Salary: ${element.workerSalary}`;
      if(index < workers.length-1){
         formated+=' ';
      }
   });
   return formated;
}

}