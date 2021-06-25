function addDestination(){
    let destinations = document.getElementById('destinationsList');
    let inputs = document.querySelectorAll('#input input');
    let city = inputs[0];
    let country = inputs[1];
    let season = document.querySelector('#seasons');

let summerEl = document.getElementById('summer') 
let autumnEl  =document.getElementById('autumn')
let winterEl  =document.getElementById('winter')
let springEl  =document.getElementById('spring')

let cityText = city.value;
let countryText = country.value;
let seasonText = season.value;

if(seasonText === 'summer') {
    summerEl.value=  Number(summerEl.value) + 1
}else if(seasonText === 'autumn'){
autumnEl.value=  Number(autumnEl.value) + 1}
else if(seasonText === 'winter'){
    winterEl.value=  Number(winterEl.value) + 1}
    else if(seasonText === 'spring')
    {springEl.value=  Number(springEl.value) + 1}
if(cityText === '' || countryText === '' || seasonText === ''){
    return;
}
let newTr = document.createElement('tr');

let tdFirst  = document.createElement('td');
tdFirst.textContent = `${cityText}, ${countryText}`;

let tdSecond  = document.createElement('td');
tdSecond.textContent = `${seasonText[0].toUpperCase()+seasonText.slice(1)}`

newTr.appendChild(tdFirst);
newTr.appendChild(tdSecond);
destinations.appendChild(newTr)

city.value = '';
country.value = '';

}