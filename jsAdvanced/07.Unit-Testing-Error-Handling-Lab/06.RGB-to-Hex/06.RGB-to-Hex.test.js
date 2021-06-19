const assert = require('chai').assert;
const rgbToHexColor = require('./06.RGB-to-Hex');



// •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of invalid type or not in the expected range


describe( 'Test rgb functionallity', () =>{
    it('Should convert to white', () =>{
        assert.equal(rgbToHexColor(0,0,0), '#000000')
    });
    it('Should convert to black', () =>{
        assert.equal(rgbToHexColor(255,255,255), '#FFFFFF')
    });
    
    it('Should convert to red' , () => {
        assert.equal(rgbToHexColor(255,0,0), '#FF0000')
    });
    it('Should convert to green' , () => {
        assert.equal(rgbToHexColor(0,255,0), '#00FF00')
    });
    it('Should convert to blue' , () => {
        assert.equal(rgbToHexColor(0,0,255), '#0000FF')
    });
    it('return undefined for negative nums' , () => {
        assert.equal(rgbToHexColor(-1,0,0), undefined)
    });
    it('return undefined for nums > 255' , () => {
        assert.equal(rgbToHexColor(256,0,0), undefined)
    });
    it('return undefined for negative nums' , () => {
        assert.equal(rgbToHexColor(0,-1,0), undefined)
    });
    it('return undefined for nums > 255' , () => {
        assert.equal(rgbToHexColor(0,256,0), undefined)
    });
    it('return undefined for negative nums' , () => {
        assert.equal(rgbToHexColor(0,0,-1), undefined)
    });
    it('return undefined for nums > 255' , () => {
        assert.equal(rgbToHexColor(0,0,256), undefined)
    });
    it('converts {151, 104, 172) to hex', () => {
        assert.equal(rgbToHexColor(151, 104, 172),'#9768AC');
    });
})