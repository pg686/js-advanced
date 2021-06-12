function solution(a){
    let add = 0;
    return function f(b){
        add = a;
        add +=b;
        return add;
    }
    
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));