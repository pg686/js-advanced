function solve(...arr){
    let result ={};
   let print = [];
    arr.forEach(element => {
       let type = typeof(element);
       print.push(`${type}: ${element}`)
       if(result[type] != undefined){
           result[type]++;
       }else{
           result[type] = 1;
       }
    });
    let sortedKeys = Object.keys(result).sort((a,b) => result[b] - result[a]);
    sortedKeys.forEach(key => {
        print.push(`${key} = ${result[key]}`)
    })
     print.forEach(element => {
         console.log(element)
     });
}
console.log(solve('cat', 42, function () { console.log('Hello world!'); }
))