function solve(input){
return 
input.sort((a,b) => a-b).slice(Math.floor(input.length/2));

}
solve([4, 7, 2, 5])