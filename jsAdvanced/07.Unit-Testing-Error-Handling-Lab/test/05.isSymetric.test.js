const isSymmetric = require('../05.isSymmetric');
const {assert,expect,should}=require('chai');
describe('Test isSymmetric' , () => {
    it('Should pass when symetric array is provided', () => {
    
        let expectedResult = true;
        let actualResult = isSymmetric([1, 2, 1]);
        assert.equal(actualResult,expectedResult)
    });
    it('Should fail when non symetric array is provided', () => {
        let expectedResult = true;

        let actualResult = isSymmetric([1, 2, 3, 3, 1]);
        assert.isFalse(actualResult,expectedResult)
    });
    it('Should pass when  symetric array of nums is provided', () => {
        let expectedResult = true;

        let actualResult = isSymmetric([1, 1, 1]);
        assert.equal(actualResult,expectedResult)
    });
    it('Should fail when non  array is provided', () => {
    
        let expectedResult = false;

     
        assert.equal(isSymmetric(null),expectedResult)
        assert.equal(isSymmetric({}),expectedResult)
        assert.equal(isSymmetric(''),expectedResult)
        assert.equal(isSymmetric(0),expectedResult)
        assert.equal(isSymmetric(true),expectedResult)
        assert.equal(isSymmetric(undefined),expectedResult)
    });
    it('Should pass when an empty  array is provided', () => {
       let actualResult =  isSymmetric([])
        let expectedResult = true;

     
        assert.equal(actualResult,expectedResult)
     
    });
    it('Should pass when an string  array is provided', () => {
        let actualResult =  isSymmetric(['g', 'm', 'g'])
         let expectedResult = true;
 
      
         assert.equal(actualResult,expectedResult)
      
     });
    it('Should fail when wrong arguments  are is provided', () => {
    
        let expectedResult = true;

     let  actualResult = isSymmetric(['1',1])
        assert.isFalse(actualResult,expectedResult)
        
    });
});