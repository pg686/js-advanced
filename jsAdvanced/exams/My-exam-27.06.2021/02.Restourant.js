class Restaurant{
    constructor(budgetMoney){
this.budgetMoney=budgetMoney;
this.menu = {};
this.stockProducts  = {};
this.history = [];

    }
    loadProducts(arr) {
        let result = [];
       
        arr.forEach(element => {
            let [productName,productQuantity,productTotalPrice] = element.split(' ');
            productQuantity=Number(productQuantity);
            productTotalPrice=Number(productTotalPrice);
         if(productTotalPrice<= this.budgetMoney){
             if(this.stockProducts[productName] === undefined){
                this.stockProducts[productName] = productQuantity;
             }else{
                this.stockProducts[productName] += productQuantity;
             }
             this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
             result.push(`Successfully loaded ${productQuantity} ${productName}`)
             this.budgetMoney -=productTotalPrice;
         }
            else{
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                result.push(`There was not enough money to load ${productQuantity} ${productName}`)  
            }

        });
        return result.join('\n')
    }
    addToMenu(meal, neededProducts,price){
        if(this.menu[meal] !== undefined){
            return `The ${meal} is already in the our menu, try something different.`
        }
        if(this.menu[meal] === undefined){
            this.menu[meal] = {products:[], price}
        
neededProducts.forEach(element=> {
    let [productName, productQuantity] = element.split(' ');
    productQuantity=   Number(productQuantity);
    if(!this.menu[meal].products.some(x=>x.productName === productName)){
        let newProducs = {productName,productQuantity};
        this.menu[meal].products.push(newProducs)
    }else{
        this.menu[meal].products.find(x=>x.productName === productName).productQuantity+=productQuantity;
    }
 
})
        }
        if(Object.keys(this.menu).length === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }else if(Object.keys(this.menu).length > 1){
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
    }
    
    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return "Our menu is not ready yet, please come later..."
        }
        let result = Object.entries(this.menu).map(([key,val]) => `${key} - $ ${val.price}`).join('\n');
        return result;
    }

    makeTheOrder(meal){

        if(this.menu[meal] === undefined){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
let result = false;
this.menu[meal].products.forEach(x=> {
    if(this.stockProducts[x.productName] === undefined){result = true} })
this.menu[meal].products.forEach(x=> {
        if(this.stockProducts[x.productName] < x.productQuantity){result = true} })


if(result){
 return   `For the time being, we cannot complete your order (${meal}), we are very sorry...`
}else{
    this.menu[meal].products.forEach(x => this.stockProducts[x.productName] -= x.productQuantity)
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
}



    }


}
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));


console.log(kitchen.showTheMenu()); 
