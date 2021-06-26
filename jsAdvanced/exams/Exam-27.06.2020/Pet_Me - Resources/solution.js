function solve() {
    // TODO ...
    let adoptionUl = document.querySelector('#adoption ul');
    let adoptedUl = document.querySelector('#adopted ul');
    let addBtn = document.querySelector('#add #container button');
    addBtn.addEventListener('click' , addPet);

    function addPet(e){
        e.preventDefault();
        let nameInput = document.querySelectorAll('#container input')[0];
        let ageInput = document.querySelectorAll('#container input')[1];
        let kindInput = document.querySelectorAll('#container input')[2];
        let ownerInput = document.querySelectorAll('#container input')[3];
        let nameText = nameInput.value;
        let ageText  = ageInput.value;
        ageText = Number(ageText);
        let kindText = kindInput.value;
        let ownerText= ownerInput.value;
if(nameText.trim() === '' || isNaN(ageText) 
|| kindText.trim() === ''
 || ownerText.trim() === '' ){
     return;
 }
 let newLi = document.createElement('li');
 let paragraph = document.createElement('p');
 
 let strongName = document.createElement('strong');
 strongName.textContent = nameText;

 let strongAge = document.createElement('strong');
 strongAge.textContent = ageText;

 let strongKind = document.createElement('strong');
 strongKind.textContent = kindText;

 paragraph.innerHTML = `<strong>${strongName.textContent}</strong> is a <strong>${strongAge.textContent}</strong> year old <strong>${strongKind.textContent}</strong>`;

 let newSpan = document.createElement('span');
 newSpan.textContent = `Owner: ${ownerText}`;

 let newBtn = document.createElement('button');
 newBtn.textContent='Contact with owner';
newBtn.addEventListener('click', contactClick);
 newLi.appendChild(paragraph);
 newLi.appendChild(newSpan);
 newLi.appendChild(newBtn);
 adoptionUl.appendChild(newLi);
 nameInput.value='';
ageInput.value='';
kindInput.value='';
ownerInput.value='';

    }

    function contactClick(e){
        if(e.target.textContent === 'Contact with owner'){
            let parentLi = e.target.parentElement;
            let newDiv = document.createElement('div');
            let newInput = document.createElement('input');
            newInput.placeholder='Enter your names';

            let newButton = document.createElement('button');
            newButton.textContent = 'Yes! I take it!';
            
            newButton.addEventListener('click', adoptedPets);
            newDiv.appendChild(newInput);
            newDiv.appendChild(newButton);

            parentLi.appendChild(newDiv);
            e.target.remove()
        }
       
    }
    function adoptedPets(e){
        let parentLi = e.target.parentElement.parentElement;
        let divEl = parentLi.querySelector('div');
        let spanOld = parentLi.querySelector('span');
console.log(parentLi)
let inputText = parentLi.querySelector('input').value;
if(inputText.trim() === ''){return;}
spanOld.remove()
let newSpan1 = document.createElement('span');

 newSpan1.textContent = `New Owner: ${inputText}`;

 let newBtn = document.createElement('button');
 newBtn.textContent='Checked';
 newBtn.addEventListener('click',checkedDel)
 divEl.remove();
parentLi.appendChild(newSpan1);
parentLi.appendChild(newBtn);
adoptedUl.appendChild(parentLi);
//parentLi.remove();
//


    }

    function checkedDel(e){
        e.target.parentElement.remove()
    }
}

