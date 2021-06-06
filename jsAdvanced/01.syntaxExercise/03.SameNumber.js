function solve(input){
let arrOfnumber = input.toString().split("");
console.log(arrOfnumber.every((val, i , arr) => val === arr[0]));
let result = arrOfnumber.map(x => parseInt(x)).reduce((a,b) => a+=b,0)
console.log(result)
    
}
solve(2222222)