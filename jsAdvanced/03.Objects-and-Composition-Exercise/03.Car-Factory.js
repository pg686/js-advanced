function solve(input){
function getEngine(power){
let engine= [
{ power: 90, volume: 1800 },
 {power: 120, volume: 2400 },
{ power: 200, volume: 3500 }

];
for(let i = 0; i<engine.length; i++){
    if(engine[i].power >= power){
        return engine[i];
        break;
    }
}

}

function getCarriage(type,color){
let obj ={
    type,
    color
}
return obj;

}

function getWheels(wheels){

    let arr = [0,0,0,0];
    if(wheels%2 == 0){
        arr.fill(wheels-1, 0,4)
    }
    else{
        arr.fill(wheels,0,4)
    }
    return arr;
}
let obj = {
    model: input.model,
    engine:getEngine(input.power),
    carriage: getCarriage(input.carriage,input.color),
wheels: getWheels(Number(input.wheelsize))
}

return obj;
}
let result = solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })
console.log(result)