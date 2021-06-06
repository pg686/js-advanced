function solve(input){
    products ={

    };
    for(let el of input){
        let [town, product, price] = el.split(' | ');
        if(!products[product]){
        products[product] = {town, price:Number(price)};
        }else{
            products[product] = products[product].price <= Number(price) ? products[product] : {town, price:Number(price)};
        }

    }
    return Object.entries(products).forEach(([key,val]) => console.log(`${key} -> ${val.price} (${val.town})`) );
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])