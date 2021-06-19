function solve(input) {
    let result = input.map(x => x.split(' | '))
    .reduce((acc, curr) =>{
let [carBrand,carModel,producedCars] = curr;
producedCars = Number(producedCars)
if(!acc.has(carBrand)){
    acc.set(carBrand,new Map())
}
if(!acc.get(carBrand).has(carModel)){
    acc.get(carBrand).set(carModel,0);
}
acc.get(carBrand).set(carModel,acc.get(carBrand).get(carModel) + producedCars);
return acc;
//“{carBrand} | {carModel} | {producedCars}”

    }, new Map());
    Array.from(result.entries()).forEach(([key,value]) => {
console.log(key);
Array.from(value.entries()).forEach(([model, quantity]) => {
    console.log(`###${model} -> ${quantity}`)
})
    })
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])