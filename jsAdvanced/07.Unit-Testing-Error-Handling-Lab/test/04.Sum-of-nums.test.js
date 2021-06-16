const assert = require('chai').assert;
const sum = require('../04.Sum-of-nums');

describe( 'Test sum functionallity', () =>{
it('Should add positive numbers', () =>{
    //Arange
    let input = [1,2,3,4,5];
    let expectedResult = 15;

    //Act 
    let actualResult = sum(input);

    //Assert
    assert.strictEqual(actualResult,expectedResult)
});
it('Should return false when adding possitive nums', ()=>{
    let input = [10,20,30];
    let expectedResult = 15;

    //Act 
    let actualResult = sum(input);

    //Assert
    assert.notEqual(actualResult,expectedResult)
});
it('Should pass when adding negative nums', ()=>{
    let input = [-1,-2,-3];
    let expectedResult = -6;

    //Act 
    let actualResult = sum(input);

    //Assert
    assert.equal(actualResult,expectedResult)
});
});