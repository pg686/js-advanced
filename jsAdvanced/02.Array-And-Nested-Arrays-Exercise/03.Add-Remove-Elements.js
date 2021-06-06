function solve(input){
let numbers =[];
for(let i = 0 ; i< input.length; i++){
   
    if(input[i] === 'add'){
numbers.push(i+1);

    }else if(input[i] === 'remove' && numbers.length > 0){
        numbers.pop()
    }
}

if(numbers.length == 0){
    console.log("Empty");
}else{
    numbers.forEach(x => console.log(x))
}
}
solve(['remove', 
'remove', 
'remove']
)