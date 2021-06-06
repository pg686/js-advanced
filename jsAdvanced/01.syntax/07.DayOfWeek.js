function solve(input){
    let week = new Map([
        ['Monday',1],
        ['Tuesday',2],
        ['Wednesday',3],
        ['Thursday',4],
        ['Friday',5],
        ['Saturday',6],
        ['Sunday',7],
      ])

if(week.has(input)){
    console.log(week.get(input));
}else{
    console.log("error");
}
}
solve(1)