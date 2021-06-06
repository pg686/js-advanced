function solve(arr, numOFrotations){
for(let i = 0; i< numOFrotations; i++){

    let firstElement = arr.pop();
    arr.unshift(firstElement)
}
return arr.join(' ');
}
console.log(solve(['1', 
'2', 
'3', 
'4'], 
2))