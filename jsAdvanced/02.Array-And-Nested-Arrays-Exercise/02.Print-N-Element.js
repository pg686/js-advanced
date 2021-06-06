function solve(input, step){
let result = input.reduce( (acc, curr, index ) => {
if( index % step === 0){
     acc.push(curr)
}
return acc;
} , []);
return result;
}


console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
))