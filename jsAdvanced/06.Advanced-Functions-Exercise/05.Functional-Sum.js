function add(sum){
    let sum = 0;
    function inner(number){
        sum += number;
        return inner;
    }
    inner.toString= () => {
        return sum;
    }
    return inner(sum)
}
add(1)(6)(-3)