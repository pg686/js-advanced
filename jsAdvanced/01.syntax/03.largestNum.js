function largestNum(num1, num2, num3){
let largestNumber = num1;
if(num2>largestNumber){
    largestNumber = num2;
}
if(num3>largestNumber){
    largestNumber = num3;
}
console.log(`The largest number is ${largestNumber}.`)
}
largestNum(5,-3,16)