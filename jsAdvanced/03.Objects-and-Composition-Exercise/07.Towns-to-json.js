function solve(input){
let  towns = [];
input.shift();
for(let el of input){
    let converted = el.substring(2, el.length-2)
let [currentTown,currentLatitude, currentLongitude] = converted.split(" | ")
let convertedLat = Number(currentLatitude).toFixed(2);
let convertedLong= Number(currentLongitude).toFixed(2)
towns.push({'Town': currentTown , 'Latitude': Number(convertedLat), 'Longitude':Number(convertedLong)});
}
return JSON.stringify(towns)
    
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))