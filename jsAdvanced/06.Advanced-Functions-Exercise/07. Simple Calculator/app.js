function calculator() {
    // TODO:
    let element1;
    let element2;
    let result ;
    return {
       init: (selector1, selector2, resultSelector) =>{
 element1= document.querySelector(selector1);
element2 = document.querySelector(selector2);
result= document.querySelector(resultSelector)
       },
       add:  () => {
          result.value =Number(element1.value) + Number(element2.value);
       },
       subtract: () => {
        result.value = Number(element1.value) - Number(element2.value);
       }
    }
}
let calculate = calculator();
calculate.init("#num1", "#num2", "#result")
let add = calculate.add;
let subtract = calculate.subtract;



