function solve() {
    // TODO

    let buttonOnScreen = document.querySelector('#container button');
 
    buttonOnScreen.addEventListener('click', onScreen);
    function onScreen(e) {
        e.preventDefault();
      let inputs =  document.querySelectorAll('#container input')
        let nameInput = inputs[0];
        let hallInput = inputs[1];
        let ticketPriceInput =inputs[2];
        let name = nameInput.value;
        let hall = hallInput.value;
        let ticketPrice = ticketPriceInput.value;
        if(name.trim() !=='' && 
        hall.trim() !=='' &&
        ticketPrice.trim() !=='' &&
        !isNaN(Number(ticketPrice))){
            ticketPrice = Number(ticketPrice).toFixed(2);
let newLi = document.createElement('li');
let newSpan = document.createElement('span');
newSpan.textContent= name;
newLi.appendChild(newSpan);
let strongHall = document.createElement('strong');
strongHall.textContent = `Hall: ${hall}`;
newLi.appendChild(strongHall);
let newDiv = document.createElement('div');
let strongPrice = document.createElement('strong');
strongPrice.textContent = ticketPrice;
let newInput = document.createElement('input');
newInput.placeholder = "Tickets Sold";
let archiveButton = document.createElement('button');
archiveButton.textContent = 'Archive';
archiveButton.addEventListener('click' , clickArchive)
newDiv.appendChild(strongPrice);
newDiv.appendChild(newInput);
newDiv.appendChild(archiveButton);
newLi.appendChild(newDiv);
let moviesSection = document.querySelector('#movies ul');

moviesSection.appendChild(newLi);
nameInput.value='';
hallInput.value='';
ticketPriceInput.value='';
    }
}
//let archiveBtn = [...document.querySelectorAll('#movies ul li button')];
//archiveBtn.forEach( element => {element.addEventListener('click' , clickArchive)});

function clickArchive(e){
    let archiveSection = document.querySelector('#archive ul');
let parentLi = e.target.parentElement.parentElement;
let titleEl = parentLi.querySelectorAll('span')[0];
let priceEl = parentLi.querySelector('div strong');
let ticketsCountEl = parentLi.querySelector('div input');
let titleText = titleEl.textContent;
let priceText = priceEl.textContent;
let ticketsCount = ticketsCountEl.value
if(ticketsCount.trim() !== '' && !isNaN(Number(ticketsCount))){
    let calcTotal = priceText * ticketsCount;
    let archiveLi = document.createElement('li');
    let archiveTitle = document.createElement('span');
    archiveTitle.textContent = titleText;
    let strongArch = document.createElement('strong');
    strongArch.textContent = `Total amount: ${calcTotal.toFixed(2)}`;
    let deleteArch = document.createElement('button');
    deleteArch.textContent = 'Delete';
    deleteArch.addEventListener('click' , deleteFromArchive)
    archiveLi.appendChild(archiveTitle);
    archiveLi.appendChild(strongArch);
    archiveLi.appendChild(deleteArch);
    archiveSection.appendChild(archiveLi);
    parentLi.remove()
}
}

function deleteFromArchive(e){
    let currentParent = e.target.parentElement;
    currentParent.remove()
}
let clearBtn = document.querySelector('#archive button');
clearBtn.addEventListener('click', function() {
    let allLi = [...document.querySelectorAll('#archive ul')];
for(let el of allLi){
    el.remove()
}
})
}