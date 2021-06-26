const { describe }  = require('mocha');
const { assert }  = require('chai');

let dealership = {
        newCarCost: function (oldCarModel, newCarPrice) {
    
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
                'Audi A8 D5': 25000,
                'Audi TT 8J': 14000,
            }
    
            if (discountForOldCar.hasOwnProperty(oldCarModel)) {
                let discount = discountForOldCar[oldCarModel];
                let finalPrice = newCarPrice - discount;
                return finalPrice;
            } else {
                return newCarPrice;
            }
        },
    
        carEquipment: function (extrasArr, indexArr) {
            let selectedExtras = [];
            indexArr.forEach(i => {
                selectedExtras.push(extrasArr[i])
            });
    
            return selectedExtras;
        },
    
        euroCategory: function (category) {
            if (category >= 4) {
                let price = this.newCarCost('Audi A4 B8', 30000);
                let total = price - (price * 0.05)
                return `We have added 5% discount to the final price: ${total}.`;
            } else {
                return 'Your euro category is low, so there is no discount from the final price!';
            }
        }
    }
    
describe('Test', function(){
    describe('newCarCost', function(){
it('test with old car that is included' , function(){
    let carModel = 'Audi A8 D5';
    let price = 35000;
    assert.equal(dealership.newCarCost(carModel,price) , 10000);
});
it('test with old car not is included' , function(){
    let carModel = 'Golf';
    let price = 1000;
    assert.equal(dealership.newCarCost(carModel,price) , 1000);
})
    });
    describe('carEquipment', function(){
        it('test with valid args' , function(){
           let extrasArr1 = ['extra1' ,'extra2','extra3','extra4'];
           let index1= [0,3];
           assert.deepEqual(dealership.carEquipment(extrasArr1,index1), ['extra1','extra4'])
        });
        it('test with no extra' , function(){
            let extrasArr1 = [];
            let index1= [0,3];
            assert.notDeepEqual(dealership.carEquipment(extrasArr1,index1), [])
         });
         it('test with no indexes' , function(){
            let extrasArr1 = ['extra1' ,'extra2','extra3','extra4'];
            let index1= [];
            assert.deepEqual(dealership.carEquipment(extrasArr1,index1), [])
         });
    });
    describe('euroCategory', function(){
        it('test with category lower than 4' , function(){
            
            assert.equal(dealership.euroCategory(3) , 'Your euro category is low, so there is no discount from the final price!');
        });
        it('test with category ==  4' , function(){
            let total = 14250
            assert.equal(dealership.euroCategory(4) ,  `We have added 5% discount to the final price: ${total}.`);
        });
    });
})