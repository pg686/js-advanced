window.addEventListener('load', solution);

function solution() {

  let previewUl = document.getElementById('infoPreview');
  let nameInput = document.getElementById('fname');
  let emailInput = document.getElementById('email');
  let phoneInput = document.getElementById('phone');
  let addressInput = document.getElementById('address');
  let codeInput = document.getElementById('code');
  console.log('TODO: Write the missing functionality!');
  let submitBtn = document.querySelector('#submitBTN');
  submitBtn.addEventListener('click', submitInputs);
  function submitInputs(e){

    let nameText = nameInput.value;
    let emailText = emailInput.value;
    let phoneText = phoneInput.value;
    let addressText = addressInput.value;
    let codeText = codeInput.value;

    if(nameText.trim() === '' || emailText.trim() === ''){
      return;
    }
    let liName = document.createElement('li');
    liName.textContent = `Full Name: ${nameText}`;

    let liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${emailText}`;

    let liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${phoneText}`;

    let liAddress = document.createElement('li');
    liAddress.textContent =  `Address: ${addressText}`;

    let licode = document.createElement('li');
    licode.textContent = `Postal Code: ${codeText}`;

    previewUl.appendChild(liName);
    previewUl.appendChild(liEmail);
    previewUl.appendChild(liPhone);
    previewUl.appendChild(liAddress);
    previewUl.appendChild(licode);
    let editBTN = document.getElementById('editBTN');
    editBTN.addEventListener('click' , makeEdit)
    let continueBTN = document.getElementById('continueBTN');
continueBTN.addEventListener('click',remmoveAll)
    editBTN.disabled = false;
    continueBTN.disabled = false;
e.target.disabled = true;
nameInput.value ='';
 emailInput.value='';
 phoneInput.value='';
 addressInput.value='';
 codeInput.value='';
  }
 function makeEdit(e){
   let parent = e.target.parentElement.parentElement;
   let allLi = Array.from(parent.querySelectorAll('li'));
   let btn1 = parent.querySelectorAll('input')[0];
   let btn2 = parent.querySelectorAll('input')[1];
   btn1.disabled=true;
   btn2.disabled=true;
   let li1 = allLi[0];
   let li2 = allLi[1];
   let li3 = allLi[2];
   let li4 = allLi[3];
   let li5 = allLi[4];
   let formated = li1.textContent.split('Full Name: ');
nameInput.value =formated[1];


emailInput.value=li2.textContent.replace('Email: ', '');
phoneInput.value=li3.textContent.replace('Phone Number: ', '');
addressInput.value=li4.textContent.replace('Address: ', '');
codeInput.value=li5.textContent.replace('Postal Code: ', '');
for(let i =0 ;i<allLi.length;i++ ){
  allLi[i].remove()
}
submitBtn.disabled=false;

 }
function remmoveAll(){
  let blockDiv = document.getElementById('block');
  blockDiv.remove();
  let newDiv = document.createElement('div');
  newDiv.id= 'block';
let newH3 = document.createElement('h3');
newH3.textContent ='Thank you for your reservation!';
newDiv.appendChild(newH3);
  let bodyTag = document.getElementsByTagName('body')[0];
  bodyTag.appendChild(newDiv);
//let idForm = document.getElementById('form');
//let idinform = document.getElementById('information');
//let h1El = blockDiv.querySelector('h1');
//let h4El = blockDiv.querySelector('h4');
//idForm.remove();
////idinform.remove();
//h1El.remove();
//h4El.remove();
//
//let newH3 = document.createElement('h3');
//newH3.textContent ='Thank you for your reservation!';
//blockDiv.appendChild(newH3)
}
}
