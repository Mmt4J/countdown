const days =  document.getElementById('dy');
const hours =  document.getElementById('hr');
const minutes =  document.getElementById('min');
const seconds =  document.getElementById('sec');

const newY = '1 june 2025';

function countdown() {
    const newYDate = new Date(newY);
    const currentD = new Date();

    const TotalSec = (newYDate - currentD) / 1000;

    const sec = Math.floor(TotalSec) % 60;
    const min = Math.floor(TotalSec / 60) % 60;
    const hr = Math.floor(TotalSec / 3600) % 24;
    const dy = Math.floor(TotalSec / 3600 / 24);

    days.innerHTML = formatT(dy);
    hours.innerHTML = formatT(hr);
    minutes.innerHTML = formatT(min);
    seconds.innerHTML = formatT(sec);
}

function formatT(time){
    e = "0";
    if(time < 10){
        time = e + time;
    }
    return time;
}
countdown();
setInterval(countdown, 1000);
