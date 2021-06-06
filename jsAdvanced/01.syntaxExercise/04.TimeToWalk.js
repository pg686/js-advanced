function solve(steps, lengthOffootprint, speed){
    let metersPerSecond = 1000/3600;
    let sumOfDestance = steps * lengthOffootprint;
let time = sumOfDestance / (speed * metersPerSecond );
let  timeToadd = Math.floor(sumOfDestance/500)*60;
time += timeToadd;

const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
const minutes = Math. floor((time - hours*3600)/60).toFixed(0).padStart(2, "0");
const second = (time - hours*60*60 - minutes* 60).toFixed(0).padStart(2, "0"); 
console.log(`${hours}:${minutes}:${second}`);
}

solve(4000, 0.60, 5)