function solve(input){
let store = {

};
for(let el of input){
    let [productName , productPrice] = el.split(" : ");
    if(!store[productName.charAt(0)]){
        store[productName.charAt(0)] = [];
    }
    store[productName.charAt(0)].push({name: productName, price:productPrice});
}

for(let el of Object.entries(store).sort((a,b) => a[0].localeCompare(b[0]))){
    console.log(el[0]);
    for(let vals of el[1].sort((a,b) => a.name.localeCompare(b.name))){
console.log(`  ${vals.name}: ${vals.price}`);
    }

}



}

console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

))