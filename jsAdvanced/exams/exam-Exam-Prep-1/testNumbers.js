const { describe }  = require('mocha');
const { assert }  = require('chai');

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe("Tests …", function() {
    describe("sumNumbers", function() {
        it("returns undifined …", function() {
           assert.equal(testNumbers.sumNumbers('ab' , 6) , undefined)
        });
        it("returns sum …", function() {
            assert.equal(testNumbers.sumNumbers(6 , 6) , 12.00)
         });
         it("returns sum …", function() {
            assert.equal(testNumbers.sumNumbers(6.145 , 6) , 12.14)
         });
     });
     describe("numberChecker", function() {
        it("returns nan …", function() {
           assert.throw(()=>testNumbers.numberChecker('ab') , 'The input is not a number!')
        });
        it("returns even…", function() {
            assert.equal(testNumbers.numberChecker(6) , 'The number is even!')
         });
         it("returns even…", function() {
            assert.equal(testNumbers.numberChecker(1) , 'The number is odd!')
         });
     });
     describe("averageSumArray", function() {
        it("returns avg …", function() {
           assert.deepEqual(testNumbers.averageSumArray([1,1,1]) , 1)
        });
        it("returns avg2 …", function() {
            assert.deepEqual(testNumbers.averageSumArray([-1,-1,-1]) , -1)
         });
         it("returns avg2 …", function() {
            assert.deepEqual(testNumbers.averageSumArray([10,-10,6]) , 2)
         });
     });
     // TODO: …
});


