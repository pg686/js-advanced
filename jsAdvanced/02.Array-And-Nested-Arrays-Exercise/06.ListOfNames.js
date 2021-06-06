function solve(input){
let result = input.sort((a,b) => a.localeCompare(b)).map((el, index) => {
    let result = `${index+1}.${el}`
    return result;
})
return result
}


console.log(solve(["John", "Bob", "Christina", "Ema"]))