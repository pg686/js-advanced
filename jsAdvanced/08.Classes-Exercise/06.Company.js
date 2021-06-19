class Company{
    constructor(){
        this.departments = new Map();
    }
  


static Employee = class Employee{
constructor(username,salary,position){
    this.username = username;
    this.salary = salary;
    this.position = position;    
}

get username(){
    return this._username;
}
set username(value){
this._validateParam(value)
     this._username =value;
}

get salary(){
    return this._salary;
}
set salary(value){
this._validateParam(value);
if(Number(value) < 0) {
    throw new Error("Invalid input!");
}
     this._salary =Number(value);
}
get position(){
    return this._position;
}
set position(value){
this._validateParam(value)
     this._position =value;
}
_validateParam(value){
    if(value  == undefined || value  == null || value  == ''){
        throw new Error("Invalid input!");
    }

}
toString() {
    return `${this.username} ${this.salary} ${this.position}`
}  

}
addEmployee(username,salary,position, department){
    if(department  == undefined || department  == null || department  == ''){
        throw new Error("Invalid input!");
    }
    if(!this.departments.has(department)){
        this.departments.set(department, []);
    }
    this.departments.get(department).push(new Company.Employee(username,salary,position))
    return `New employee is hired. Name: ${username}. Position: ${position}`
}



bestDepartment(){

    let bestDepartment = [...this.departments.entries()].sort(([aKey,aVal] , [bKey,bVal]) => {
        let avg1  = this.avarageSalary(aKey);
        let avg2  = this.avarageSalary(bKey);
        return avg2 - avg1;
    })[0];
 let bestDepString =   `Best Department is: ${bestDepartment[0]}\nAverage salary: ${this.avarageSalary(bestDepartment[0]).toFixed(2)}`
let [depName,depWorkers] = bestDepartment;
   let bestworkers =  depWorkers.sort((a,b) => {
return b.salary -a.salary || a.username.localeCompare(b.username);

    });
    let bestWorkersStr = bestworkers.map(x=> x.toString()).join('\n')
return `${bestDepString}\n${bestWorkersStr}`
}
avarageSalary(departmentName){
    let avgSalary= this.departments.get(departmentName).reduce((acc, curr) => {
       
        acc += curr.salary;
        return acc;
    },0)/ this.departments.get(departmentName).length;
    return avgSalary;
}
}



let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
