function solve(input){
return input.sort((a,b) => a.length - b.length || a.localeCompare(b)).forEach(element => {
    console.log(element)
});
}

console.log(solve(['alpha', 
'beta', 
'gamma']))