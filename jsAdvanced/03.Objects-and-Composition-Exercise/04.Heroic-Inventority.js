function solve(input){
let heros = [];
for(let el of input){
    let [name, lvl, lastEl] = el.split(" / ");
    let items = lastEl ? lastEl.split(', ') :  [];
    let obj = {
        name,
        level:Number(lvl),
        items:items
    }
    heros.push(obj);
}
return JSON.stringify(heros);
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))