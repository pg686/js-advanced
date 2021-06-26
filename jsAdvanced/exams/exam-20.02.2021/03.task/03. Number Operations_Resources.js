const { describe }  = require('mocha')
const { assert }  = require('chai')

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

 describe('Test' , function() {
    describe('powNumber' , function() {
     it('tesst with positive num' , function() {
         assert.equal(numberOperations.powNumber(5), 25)
     })
     it('tesst with negative num' , function() {
        assert.equal(numberOperations.powNumber(-3), 9)
    })
    });
    describe('numberChecker' , function() {
        it('test with nan' , function() {
            assert.throw( () => numberOperations.numberChecker('abc') ,'The input is not a number!' );
        });
        it('test with num lower than 100' , function() {
            assert.equal(numberOperations.numberChecker(99) ,'The number is lower than 100!' );
        });
        it('test with num greater than 100' , function() {
            assert.equal(numberOperations.numberChecker(100) ,'The number is greater or equal to 100!' );
        });
        it('test with num greater than 100' , function() {
            assert.equal(numberOperations.numberChecker(101) ,'The number is greater or equal to 100!' );
        });
        it('test with num lower than 100' , function() {
            assert.equal(numberOperations.numberChecker(-100) ,'The number is lower than 100!' );
        });
    });
    describe('sumArrays' , function() {
        it('tesst with empty num' , function() {
            assert.deepEqual(numberOperations.sumArrays([],[]), [])
        })
        it('tesst with array with different length' , function() {
            let arr1 = [1,2,4];
            let arr2 = [2,4]
            assert.deepEqual(numberOperations.sumArrays(arr1,arr2), [3,6,4]);
        });
        it('tesst with string arrs' , function() {
            let arr1 = ['a' , '12', 'b'];
            let arr2 = ['b', 'c' , 'a' ]
            assert.deepEqual(numberOperations.sumArrays(arr1,arr2), ['ab','12c' , 'ba'])
        });
        it('tesst with array with negative nums' , function() {
            let arr1 = [-1,-2,-4];
            let arr2 = [2,4]
            assert.deepEqual(numberOperations.sumArrays(arr1,arr2), [1,2,-4]);
        });
        
       });
 })   ;

