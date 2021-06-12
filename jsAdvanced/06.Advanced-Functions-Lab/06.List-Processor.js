function solve(arr){
    let obj = {
        add: function(string){
   innerArr.push(string);
        },
        remove: function(string){
            innerArr= innerArr.filter(x=> x!== string)
        },
        print: () =>
            console.log(innerArr.join(','))
        
    
   }
let  innerArr = [];
arr.forEach(element => {
   
        let [first,second]= element.split(' ');
        obj[first](second)
    
    
});



 
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])