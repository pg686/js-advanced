function solve(input){
const towns = {};

for(let townInput of input){
    let [town, population] = townInput.split(' <-> ');
    population = Number(population);
    if(towns[town] == undefined){
        towns[town] = population;
    }else{
        towns[town] += population;
    }
}
for(let town in towns){
    console.log(`${town} : ${towns[town]}`);
}

}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])