function attachEvents() {
    console.log("TODO...");
let conditions = {
'Sunny': "☀",			  
'Partly sunny':'⛅',
'Overcast':'☁',
'Rain':'☂',
//'Degrees':'&#176;'
}
    let submitBtn = document.querySelector('#submit');
  let forecastEl =   document.querySelector('#forecast');
  let current =   document.querySelector('#current');
  let upcoming = document.querySelector('#upcoming');
    submitBtn.addEventListener('click', function(){
        let locationInput = document.querySelector('#location');
        let location = locationInput.value;
        let baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
        fetch(`${baseUrl}`)
        .then((res) => {
            if(res.ok){
                return res.json();
            }
        })
        .then((data) => {
            let resultLocation = data.find(element => element.name === location )
       console.log(resultLocation.code);
       forecastEl.style.display = "block";
todayWeather(resultLocation.code);
upcomingWeather(resultLocation.code);
        })
    })


    function todayWeather(locationCode){
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
        .then((res) => {
            if(res.ok){
           return res.json()}})
        .then((data) => {
            console.log(data.forecast.condition)
let newDiv = createTodayEl(data.name,data.forecast.low,data.forecast.high,data.forecast.condition)
current.innerHTML=`<div class="label">Current conditions</div>`;
current.appendChild(newDiv)   
})
    }
    function createTodayEl(locName, tempLow, tempHigh, cond){
let outerDiv = document.createElement('div');
outerDiv.classList.add('forecasts');

        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('symbol');
        console.log(conditions[cond])
        spanSymbol.textContent = conditions[cond];

        let span2 = document.createElement('span');
        span2.classList.add('condition');

        let spanData1 = document.createElement('span');
        spanData1.classList.add('forecast-data');
        spanData1.textContent = locName;

        let spanData2 = document.createElement('span');
        spanData2.classList.add('forecast-data');
        spanData2.textContent = `${tempLow}°/${tempHigh}°`;
   
        let spanData3 = document.createElement('span');
        spanData3.classList.add('forecast-data');
        spanData3.textContent = cond;

        outerDiv.appendChild(spanSymbol);
        outerDiv.appendChild(span2);
        outerDiv.appendChild(spanData1);
        outerDiv.appendChild(spanData2);
        outerDiv.appendChild(spanData3);
        return outerDiv;
    }
    function upcomingWeather(resultLocation){
        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${resultLocation}`)
        .then((res) => {
            if(res.ok){
           return res.json()}})
        .then((data) => {
            console.log(data.forecast);
            let arrForcasts = data.forecast;
        let upcomingouterDiv = document.createElement('div');
        upcomingouterDiv.classList.add('forecast-info');

arrForcasts.forEach(element => {
    let newSpan = createUpcomingEl(element.low,element.high,element.condition);
    upcomingouterDiv.appendChild(newSpan)
});       

upcoming.innerHTML=`<div class="label">Three-day forecast</div>`;
upcoming.appendChild(upcomingouterDiv)  
    })

}
function createUpcomingEl(tempLow, tempHigh, cond){
    let spanOuter = document.createElement('span');
    spanOuter.classList.add('upcoming');

    let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('symbol');
        console.log(conditions[cond])
        spanSymbol.textContent = conditions[cond];

        let spanData2 = document.createElement('span');
        spanData2.classList.add('forecast-data');
        spanData2.textContent = `${tempLow}°/${tempHigh}°`;

        let spanData3 = document.createElement('span');
        spanData3.classList.add('forecast-data');
        spanData3.textContent = cond;
        spanOuter.appendChild(spanSymbol);
        spanOuter.appendChild(spanData2);
        spanOuter.appendChild(spanData3);
        return spanOuter;
}
}

//{ 
//    name: locationName,
//    forecast: [{ low: temp,
//                 high: temp,
//                 condition: condition }, … ] 
//  }
  
attachEvents();