const isSymetric = require('../05.isSymetric');
const {assert,expect,should}=require('chai');
describe('Test isSymmetric' , () => {
    it('Should pass when symetric array is provided', () => {
    
        let expectedResult = true;
        let actualResult = isSymetric([1, 2, 1]);
        assert.equal(actualResult,expectedResult)
    });
    it('Should fail when non symetric array is provided', () => {
        let expectedResult = true;

        let actualResult = isSymetric([1, 2, 3, 3, 1]);
        assert.isFalse(actualResult,expectedResult)
    });
    it('Should pass when  symetric array of nums is provided', () => {
        let expectedResult = true;

        let actualResult = isSymetric([1, 1, 1]);
        assert.equal(actualResult,expectedResult)
    });
    it('Should fail when non  array is provided', () => {
    
        let expectedResult = false;

     
        assert.equal(isSymetric(null),expectedResult)
        assert.equal(isSymetric({}),expectedResult)
        assert.equal(isSymetric(''),expectedResult)
        assert.equal(isSymetric(0),expectedResult)
        assert.equal(isSymetric(true),expectedResult)
        assert.equal(isSymetric(undefined),expectedResult)
    });
    it('Should pass when an empty  array is provided', () => {
       let actualResult =  isSymetric([])
        let expectedResult = true;

     
        assert.equal(actualResult,expectedResult)
     
    });
    it('Should pass when an string  array is provided', () => {
        let actualResult =  isSymetric(['g', 'm', 'g'])
         let expectedResult = true;
 
      
         assert.equal(actualResult,expectedResult)
      
     });
    it('Should fail when wrong arguments  are is provided', () => {
    
        let expectedResult = true;

     let  actualResult = isSymetric(['1',1])
        assert.isFalse(actualResult,expectedResult)
        
    });
});