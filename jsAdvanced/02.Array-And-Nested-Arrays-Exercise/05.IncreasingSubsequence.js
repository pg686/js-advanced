function solve(arr){
let result = arr.reduce((acc, curr) => {
if(arr[acc.length-1] <= curr || arr[acc.length-1] == undefined){
    acc.push(curr);
}
return acc;
}, []);
return result;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))