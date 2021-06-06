function solve(speed, area){
let limitations = new Map([
    ['motorway' , 130],
    ['interstate' , 90],
    ['city' , 50],
    ['residential', 20]

    ]);
    const limit = limitations.get(area);
    const difference = speed - limit;

 if(difference < 0){
     console.log(`Driving ${speed} km/h in a ${limit} zone`);   
 }   
 else if (difference<= 20){
     console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`)
 }
 else if (difference<= 40){
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`)
}else {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`)
}
}
solve(200, 'motorway')