function attachEventsListeners() {

let daysBtn = document.getElementById('daysBtn');
let hoursBtn = document.getElementById('hoursBtn');
let minutesBtn = document.getElementById('minutesBtn');
let secondsBtn = document.getElementById('secondsBtn');

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

daysBtn.addEventListener('click' , function(){
    seconds.value = Number(days.value) * 24*60*60;
    minutes.value = Number(days.value) * 24*60;
    hours.value = Number(days.value) * 24;
});


hoursBtn.addEventListener('click' , function(){
    seconds.value = Number(hours.value) * 60*60;
    minutes.value = Number(hours.value) *60 ;
    days.value = Number(hours.value) / 24;
});

minutesBtn.addEventListener('click' , function(){
    seconds.value = Number(minutes.value) * 60;
    hours.value = Number(minutes.value) /60 ;
    days.value = Number(minutes.value) / 24 / 60;
});

secondsBtn.addEventListener('click' , function(){
    hours.value = Number(seconds.value) /60/60;
    minutes.value = Number(seconds.value) /60 ;
    days.value = Number(seconds.value) / 24 /60 /60;
});
}