class Parking {
    constructor(capacity){
        this.capacity=capacity;
        this.vehicles=[];
        
    }

    static Car = class Parking{
        constructor(carModel, carNumber){
            this.carModel= carModel;
            this.carNumber= carNumber;
            this.payed = false;
        }


}
addCar(carModel, carNumber ){
if(this.vehicles.length >= this.capacity){
    throw new Error('"Not enough parking space."')
}
this.capacity--;
this.vehicles.push(new Parking.Car(carModel,carNumber))
return  `The ${carModel}, with a registration number ${carNumber}, parked.`;
}

removeCar(value){
    let index = this.vehicles.findIndex(x=>x.carNumber==value);
    if(index < 0){
        throw new Error(`The car, you're looking for, is not found.`)
    }
    if(this.vehicles[index].payed === false){
        throw new Error(`${value} needs to pay before leaving the parking lot."`)
    }
    this.vehicles.splice(index,1);
    this.capacity++;
    return `${value} left the parking lot.`;
   }

pay(value) {
    let car = this.vehicles.find(x => x.carNumber===value)
    if(!car){
        throw new Error(`${value} is not in the parking lot."`)
    }
    if(car.payed){
        throw new Error(`${value}'s driver has already payed his ticket.`)
    }
    car.payed =true;
    return `${value}'s driver successfully payed for his stay.`;

}
getStatistics(carNumber){
    if(!carNumber)
{
   let result= `The Parking Lot has ${this.capacity} empty spots left.\n` 
result += this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel)).map(x => `${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`
).join('\n');
return result;
}
let car = this.vehicles.find(x => x.carNumber === carNumber)
return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
}
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics("TX3691CA"));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
