function solve(num1, operation1 , operation2, operation3 , operation4 ,operation5){
let result = Number(num1);
let operations = [operation1, operation2, operation3 , operation4, operation5 ];
for ( let i = 0; i< 5 ; i++){
    switch(operations[i]){
        case 'chop': result /= 2; break;
        case 'dice': result = Math.sqrt(result); break;
        case 'spice': result += 1; break;
        case 'bake': result *= 3; break;
        case 'fillet': result= result - result*0.2; break;
        
    }
    console.log(result);
}

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')