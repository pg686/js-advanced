function solve(input){
    let newArr = input.reduce((acc,curr) => {
     return acc.concat(curr);   
    }  )
    let maxNum = newArr.reduce((acc,curr) => 
        acc > curr ? acc : curr
    )
return maxNum;
}
console.log(solve([
    [20, 50, 10],
    [8, 33, 145]
]))