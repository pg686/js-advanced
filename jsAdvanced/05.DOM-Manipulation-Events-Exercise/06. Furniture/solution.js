function solve() {
let text = document.querySelectorAll('#exercise textarea');
let buttons = document.querySelectorAll('#exercise button');
let tbody = document.getElementsByTagName('tbody')[0];
let products =[];

buttons[0].addEventListener('click', function click() {
  let objects = JSON.parse(text[0].value);
objects.forEach(element => {
  let newImg = element.img;
  let newName = element.name;
  let newPrice = element.price;
  let decFactor = element.decFactor;
  let tdImg = document.createElement('td');
  let img = document.createElement('img');
  img.src = newImg;
  tdImg.appendChild(img);
  let tdName = document.createElement('td');
  let paragraphName = document.createElement('p');
  paragraphName.textContent = newName;
  tdName.appendChild(paragraphName);
  let tdPrice = document.createElement('td');
  let paragraphPrice = document.createElement('p');
  paragraphPrice.textContent = newPrice;
  tdPrice.appendChild(paragraphPrice);
  let tdFactor = document.createElement('td');
  let paragraphFactor = document.createElement('p');
  paragraphFactor.textContent = decFactor;
  tdFactor.appendChild(paragraphFactor);
  let tdcheckbox = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  tdcheckbox.appendChild(checkbox);
  let newTr = document.createElement('tr')
newTr.appendChild(tdImg);
newTr.appendChild(tdName);
newTr.appendChild(tdPrice);
newTr.appendChild(tdFactor);
newTr.appendChild(tdcheckbox);
tbody.appendChild(newTr);
});
})

buttons[1].addEventListener('click', function click(){
  let checkboxes = [...document.querySelectorAll('tbody tr td input:checked')]
  checkboxes.forEach(ch => {
    if(ch.checked){
let currentTr = ch.parentElement.parentElement;
let productName = currentTr.querySelector('td:nth-child(2) p').textContent;
let productPrice = Number(currentTr.querySelector('td:nth-child(3) p').textContent);
let productdecFactor = Number(currentTr.querySelector('td:nth-child(4) p').textContent);
products.push({productName,productPrice,productdecFactor});

    }
  });
  let allFurnitures = products.reduce((acc,curr) => {
acc.push(curr.productName);
return acc;
  } ,[]).join(', ');

  let totalPrice = products.reduce((acc,curr) => {
acc += curr.productPrice;
return acc;
  }, 0).toFixed(2);

  let avgFactor = products.reduce((acc,curr) => {
    acc += curr.productdecFactor;
    return acc;
      }, 0)/ products.length;

text[1].value += `Bought furniture: ${allFurnitures}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgFactor}` 
})
  //TODO...
}