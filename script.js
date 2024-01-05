const start_button = document.querySelector('.start-button');
const pause_button = document.querySelector('.pause-button');
const reset_button = document.querySelector('.reset-button');
const lap_button = document.querySelector('.lap-button');
const timer = document.querySelector('.display .timer');
const lap_time = document.querySelector('.lap-time');
let seconds = 0;
let time = null;
let lap_time_section = [];

function stopWatch(){
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let sec = seconds % 60;

    if(hours < 10) hours = '0' + hours;
    if(mins < 10) mins = '0' + mins;
    if(sec < 10) sec = '0' + sec;

    timer.innerText = `${hours}hr : ${mins}min : ${sec}s`
}

start_button.addEventListener('click',() => {
    if(!time);
    time = setInterval(stopWatch,1000);
});

pause_button.addEventListener('click',() => {
    clearInterval(time);
    time = null;
});

reset_button.addEventListener('click',() => {
    clearInterval(time);
    time = null;
    seconds = 0;
    lap_time_section = [];
    lap_time.innerHTML = lap_time_section.map((lap, index) => `Lap ${index + 1}: ${lap}`).join('<br>');
    timer.innerText = '00hr : 00min : 00s';
});

lap_button.addEventListener('click',() => {
    lap_time_section.push(timer.innerText);
    lap_time.innerHTML = lap_time_section.map((lap, index) => `Lap ${index + 1}: ${lap}`).join('<br>');
});
