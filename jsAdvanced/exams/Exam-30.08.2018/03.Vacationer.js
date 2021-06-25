class Vacationer {
    // TODO: implement this class 
    constructor(arrName ,cardDetails = [1111 , "" , 111]){
        if(isNaN(cardDetails[0]) || isNaN(cardDetails[2])){
            throw new Error("Invalid credit card details")
        }
        if(cardDetails.length < 3){
            throw new Error("Missing credit card information")
        }
this.fullName = arrName;
this.cardqNumber = cardDetails[0];
this.expirationDate = cardDetails[1];
this.securityNumber = cardDetails[2];
this.wishList  = [];
this.idNumber = this.generateIDNumber();

       // this.fullName  = arrName;
        
    }
    get cardqNumber() {
        return this._cardqNumber;
    }
    get fullName()  {
        return this._fullName;
    }

    get expirationDate() {
        return this._expirationDate;
    }
    get securityNumber() {
        return this._securityNumber;
    }
set cardqNumber(value) {
if(value === undefined || isNaN(value)){
    this._cardqNumber = 1111
}else{
        this._cardqNumber = value 
      
    }}
    

    set expirationDate(value) {
        this._expirationDate = value ? value : '';
    }
    set securityNumber(value) {
        if(!value || isNaN(value)){
            this._securityNumber = 111
        }else{
        this._securityNumber = value
    }
    }
    _validateCurrentName([arg1,arg2,arg3]){
let value = `${arg1} ${arg2} ${arg3}`
        let regex = /(^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$)/
        if(value.length<3){
            throw new Error('Name must include first name, middle name and last name')
        }
        if(!regex.test(value)){
            throw new Error('Invalid full name');
        }
    }


    set fullName([arg1,arg2,arg3]){
        this._validateCurrentName([arg1,arg2,arg3]);
        this._fullName = [arg1,arg2,arg3]
    }
  
    
    addCreditCardInfo(arg1, arg2, arg3){
        if(!arg1 || !arg2 || !arg3 ){
            throw new Error("Missing credit card information")
        }
        if(isNaN(arg1) || isNaN(arg3)){
            throw new Error("Invalid credit card details");
        }
        this.cardqNumber = arg1;
        this.expirationDate = arg2;
        this.securityNumber = arg3;
    }

    generateIDNumber() {
        let arrLastLetter =["a", "e", "o", "i", "u"]
        let fistLetterAsci = this.fullName[0].charCodeAt(0);
        let middleNameLength = this.fullName[1].length;
        let lastChar = this.lastName[2][this.fullName[2].length-1];
        let addNum = arrLastLetter.includes(lastChar) ? 8 : 7;
        let result = fistLetterAsci +139  * middleNameLength
        return `${result}${addNum}`
    }
    addDestinationToWishList(destination)  {
        if(this.wishList.includes(destination)){
            throw new Error('Destination already exists in wishlist.');
        }
        this.wishList.push(destination);
        this.wishList.sort((a,b) => a.length - b.length);
    }
    getVacationerInfo() {
        let getWishlist = this.wishlist.length >0 ? this.wishList.join(', ') : 'empty'
let result  = `Name: ${this.firstName[0]} ${this.fullName[1]} ${this.fullName[2]}\n`;
result += `ID number: ${this.idNumber}\nWishlist:\n${getWishlist}\nCredit Card:\n`;
result += `Card Number: ${this.cardqNumber}\nExpiration Date: ${this.expirationDate}\nSecurity Number: ${this.securityNumber}`
return result;
//“Name: {firstName} {middleName} {lastName}
// ID number: {idNumber}
// Wishlist: 
// empty/destinations, joined with ‘, ’
// Credit Card:
// Card Number: {cardNumber}
// Expiration Date: {expirationDate}
// Security Number: {securityNumber}”

    }

}
// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
//let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
//[123456789, "10/01/2018", 777]);
//
//// Should throw an error (Invalid full name)
//
//
//vacationer1.addDestinationToWishList('Spain');
//vacationer1.addDestinationToWishList('Germany');
//vacationer1.addDestinationToWishList('Bali');
//
//// Return information about the vacationers
//console.log(vacationer1.getVacationerInfo());
//console.log(vacationer2.getVacationerInfo());

