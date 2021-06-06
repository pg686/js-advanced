function solve(input){
return input.reduce((acc, current , index) => {
if(index % 2 !== 0){
     acc.push(current * 2);
}
return acc
}
, []).reverse()}

console.log(solve([3, 0, 10, 4, 7, 3]));