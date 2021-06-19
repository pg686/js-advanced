function solve(input) {
    let juiceBottles = new Map();
    let storeJuice = input.map(line => line.split(' => '))
    .reduce((acc, curr) => {
let [juiceName, juiceQuantity] = curr;
juiceQuantity = Number(juiceQuantity);
if(!acc.has(juiceName)){
acc.set(juiceName,0)
}
acc.set(juiceName, acc.get(juiceName)+ juiceQuantity);
if(acc.get(juiceName) >= 1000){
    if(!juiceBottles.has(juiceName)){
        juiceBottles.set(juiceName,0)
    }
    juiceBottles.set(juiceName,juiceBottles.get(juiceName)+ Math.trunc(acc.get(juiceName) / 1000))
acc.set(juiceName, acc.get(juiceName)% 1000)

}
return acc;
    },new Map())

    let result = ''
Array.from(juiceBottles.entries()).forEach(([key,val]) => {
result+= `${key} => ${val}\n`
})
return result

}
console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']))
