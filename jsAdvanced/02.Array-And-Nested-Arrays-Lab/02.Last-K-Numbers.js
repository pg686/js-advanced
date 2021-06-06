function solve(n,k){
let sequence = [];
sequence[0] = 1;
let currentElement;
for(let i = 0; i< n-1 ; i++){
  
     currentElement= sequence.reduce((accumulator, currentValue) =>
    {        if(sequence[i-index] == undefined) return accumulator; 
               return accumulator + sequence[i-index];  
       }, 1);
    }
    sequence.push(currentElement);


console.log(sequence)
}
solve(6, 3)