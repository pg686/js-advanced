function solve(input){

    let sum = input[0].reduce((acc,current) => acc + Number(current));
  
    let sumOfCols = [];
    let checker = true; 
    let sumOfRows  = input.reduce((acc,current) =>  {

   let rowSum = current.reduce((accumolator, curr) =>
(accumolator + curr),0
    );
     
     acc.push(rowSum);
     return acc
    }
    ,[]);
    
    for(let i =0; i< input.length; i++){
        let colSum = 0;
for(let j= 0; j< input[i].length; j++){
    colSum += input[j][i];
}
sumOfCols.push(colSum);
    }
    if(sumOfCols.find(x=> x!= sum) || sumOfRows.find(x=> x!= sum)){
        checker=false;
    }
    return checker;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]))