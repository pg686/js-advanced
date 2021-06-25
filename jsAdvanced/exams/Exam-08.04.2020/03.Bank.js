class Bank{
    constructor(bankName){

this.bankName = bankName;
this.allCustomers  = []
    }
    newCustomer({firstName, lastName, personalId}){
if(this.allCustomers.some(x => x.firstName == firstName && x.lastName == lastName)){
    throw new Error(`${firstName} ${lastName} is already our customer!`)
}
let newCust = {firstName,lastName,personalId}
this.allCustomers.push(newCust);
return newCust;
    }
    depositMoney (personalId, amount){
        if(!this.allCustomers.some(x=>x.personalId === personalId)){
            throw new Error('We have no customer with this ID!');            
        }
        if(this.allCustomers.find(x=>x.personalId == personalId).totalMoney === undefined){
            this.allCustomers.find(x=>x.personalId == personalId).totalMoney = 0
            this.allCustomers.find(x=>x.personalId == personalId).transactions = [];
        }
        let current = this.allCustomers.find(x=>x.personalId == personalId)
        current.totalMoney += Number(amount);
        current.transactions
        .push(`${current.transactions.length+1}. ${current.firstName} ${current.lastName} made deposit of ${amount}$!`)
        return `${current.totalMoney}$`
    }
    withdrawMoney (personalId, amount){
        if(!this.allCustomers.some(x=>x.personalId === personalId)){

            throw new Error('We have no customer with this ID!'); 
        }
        let current = this.allCustomers.find(x=>x.personalId === personalId);
        if(current.totalMoney === undefined ||  current.totalMoney < Number(amount)){
            throw new Error(`${current.firstName} ${current.lastName} does not have enough money to withdraw that amount!`)
        
        }
        current.totalMoney -= Number(amount);
current.transactions.push(`${current.transactions.length+1}. ${current.firstName} ${current.lastName} withdrew ${amount}$!`)
        return `${current.totalMoney}$`
    
    }
    customerInfo (personalId){
        if(!this.allCustomers.some(x=>x.personalId === personalId)){
            `We have no customer with this ID!`
        }
        let current = this.allCustomers.find(x => x.personalId === personalId)
        let getTransactions = [];
        for(let i = current.transactions.length-1;i>= 0; i-- ){
            getTransactions.push(current.transactions[i]);
        }
       
    let     result = `Bank name: ${this.bankName}\nCustomer name: ${current.firstName} ${current.lastName}\n`
result+= `Customer ID: ${current.personalId}\nTotal Money: ${current.totalMoney}$\n`;
result+= `Transactions:\n${getTransactions.join('\n')}`
return result;
    //Bank name: {bankName}
//Customer name: {firstName} {lastName}
//Customer ID: {personalId}
//Total Money: {totalMoney}$
//Transactions:
//n. {firstName} {lastName} made deposit of {amount}$!

    }



}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
