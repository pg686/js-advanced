function solve(fruit, grams, numberForKilo){
let gramsToKilos = Number(grams) / 1000;

console.log(`I need $${(gramsToKilos*numberForKilo).toFixed(2)} to buy ${gramsToKilos.toFixed(2)} kilograms ${fruit}.`)
}


solve('orange', 2500, 1.80)