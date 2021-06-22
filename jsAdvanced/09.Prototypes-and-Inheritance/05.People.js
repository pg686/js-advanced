function solve(){
    class Employee{
        constructor(name, age, tasks){
            if(this.constructor === Employee){
                throw new Error('This is abstract class.')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks= tasks;
            this._currentTask = 0;
        }
        work(){

            if(this._currentTask === this.tasks.length){
                this._currentTask = 0;
            }
            let task = this.tasks[this._currentTask].replace('{name}' , this.name);
            this._currentTask++;
            console.log(task)
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name,age){
            super(name, age, ['{name} is working on a simple task.']);
        }
    }

    class Senior extends Employee {
        constructor(name,age){
            super(name, age, [ '{name} is working on a complicated task.',
            '{name} is taking time off work.',
            '{name} is supervising junior workers.']);
        }
    }
    class Manager extends Employee {
        constructor(name,age){
            super(name, age, [
            '{name} scheduled a meeting.',
            '{name} is preparing a quarterly report.'
        ]);

            this.dividend  = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }

}
const classes =solve(); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  
