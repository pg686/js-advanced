

class ChristmasDinner {
    // TODO: implement this class...
    constructor(budget){
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests  = {};
    }

    get budget(){
return this._budget;
    }
    set budget(value){
     if(value < 0){
         throw new Error('The budget cannot be a negative number')
     }   
     this._budget = value;
    }

    shopping([type, price] ){
       
        price = Number(price);
        if(this.budget <  price){
            return new Error('Not enough money to buy this product');
        }
        this.budget -=price;
        this.products.push(type);
        return `You have successfully bought ${type}!`
    }
    recipes({recipeName, productsList}){
   

        let absentEl = productsList.filter(x => !this.products.includes(x))
        
           if(absentEl.length >0) {
               throw new Error("We do not have this product")
           }
       
     
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish){
        if(!this.dishes.some(x =>    x.recipeName === dish)){
            throw new Error('We do not have this dish')
        }
        if(this.guests[name] !== undefined){
            throw new Error('This guest has already been invited')
        }
        this.guests[name] = dish;   
        return `You have successfully invited ${name}!`
    }
    showAttendance(){
//"{name} will eat {dish}, which consists of {products}
let result =[];
Object.entries(this.guests).forEach(([key,val]) => {
result.push(`${key} will eat ${val}, which consists of ${this.dishes.find( x => x.recipeName == val).productsList.join(', ')}`
)});
return result.join('\n');
    }

}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
