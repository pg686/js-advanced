function solve(input){
let leftDiagonal = 0;
let rightDiagonal = 0;

for(let i = 0; i< input.length  ; i++){
leftDiagonal += input[i][i];

rightDiagonal += input[i][input.length- i -1];
}
console.log(leftDiagonal,rightDiagonal);

}

solve([
    [20, 40],
    [10, 60]
])