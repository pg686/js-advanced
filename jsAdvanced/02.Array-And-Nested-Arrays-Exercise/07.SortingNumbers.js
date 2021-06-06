function solve(input){
let arr = [];
input.sort((a,b)=> a-b);
while(input.length > 0){
let smallest = input.shift();
let biggest = input.pop();
arr.push(smallest);
arr.push(biggest)

}
return arr

}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))