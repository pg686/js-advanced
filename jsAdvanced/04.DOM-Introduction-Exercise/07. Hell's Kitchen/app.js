function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input =document.querySelector('#inputs textarea').value.split('("\,(|\n)")');
      let restourants = [];
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
let currentRestorant = createObj(restourantName,newArr);
restourants.push(currentRestorant);

      }

      //   TODO:
      let bestRestourant = getBestRestouranat(restourants);
      document.querySelector('#bestRestaurant p').textContent = formattingBestRestourant(bestRestourant);
      document.querySelector('#workers p').textContent = formattingWorkers(bestRestourant.workers);
    
   }
   function createObj(restourantName,workers){
return {
   name: restourantName,
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
      let string = 'Name: '+bestRestourant.name+ ' Average Salary: '+bestRestourant.avarageSalary().toFixed(2)+ ' Best Salary: ' +bestRestourant.bestSalary().toFixed(2);
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