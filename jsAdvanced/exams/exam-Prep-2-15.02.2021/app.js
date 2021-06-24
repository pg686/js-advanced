function solution() {
    //TO DO
let listOfGiftsSection = document.querySelectorAll('.container section')[1];
let listOfGifts = listOfGiftsSection.querySelector('ul');

let listOfSendGiftsSection = document.querySelectorAll('.container section')[2];
let listOfSendGifts = listOfSendGiftsSection.querySelector('ul')

let listOfDiscardGiftsSection = document.querySelectorAll('.container section')[3];
let listOfDiscardGifts = listOfDiscardGiftsSection.querySelector('ul')
    let addBtn = document.querySelector('.card div button');
    addBtn.addEventListener('click', addGift);


    function addGift(){
        let giftName = document.querySelectorAll('.container input')[0];
        let giftNameText = giftName.value;
let newLi = document.createElement('li');
newLi.classList.add('gift');
 //newLi.innerHTML += `\n${giftNameText}\n`;
newLi.classList.add('gift');
newLi.textContent = `${giftNameText}`;
giftName.value = '';
let sendBtn = document.createElement('button');
sendBtn.textContent='Send';
sendBtn.id='sendButton';
sendBtn.addEventListener('click', sendGift)

let discardButton = document.createElement('button');
discardButton.textContent='Discard';
discardButton.id='discardButton';
discardButton.addEventListener('click' , discardEl)
newLi.appendChild(sendBtn);
newLi.appendChild(discardButton);
listOfGifts.appendChild(newLi)
Array.from(listOfGifts.children).sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(x => listOfGifts.appendChild(x))
    }
    function sendGift(e){
let getTitles = e.target.parentElement.textContent;
let getTitle = getTitles.match(/^(.*)(?=SendDiscard)/)[0];
let sendLi = document.createElement('li');
sendLi.classList.add('gift');
sendLi.textContent= getTitle;
listOfSendGifts.appendChild(sendLi);
e.target.parentElement.remove()

    }
    function discardEl(e){ 
        let getTitles = e.target.parentElement.textContent;
        let getTitle  =getTitles.match(/^(.*)(?=SendDiscard)/)[0];
        let sendLi = document.createElement('li');
        sendLi.classList.add('gift');
        sendLi.textContent= getTitle;
        listOfDiscardGifts.appendChild(sendLi);
        e.target.parentElement.remove()
    }
}