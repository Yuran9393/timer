window.addEventListener('DOMContentLoaded',function(){          
    'use strict';
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining,hours,minutes,seconds};
          }
        function updataClock() {
            let timer = getTimeRemaining();
                timerHours.textContent = timer.hours;
                timerMinutes.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;
            if(timer.timeRemaining > 0){
            setTimeout(updataClock, 1000);
            }
            if(timerHours.textContent < 0  || timerMinutes.textContent < 0 || timerSeconds.textContent < 0) {
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "0";
            }
            if(timerSeconds.textContent < 10){
                timerSeconds.textContent = '0' +timerSeconds.textContent;
            } else if(timerMinutes.textContent < 10){
                timerMinutes.textContent = '0' +timerMinutes.textContent;
            }else if(timerHours.textContent < 10){
                timerHours.textContent = '0' +timerHours.textContent;
            }
        }
        updataClock();
    }
    setInterval(countTimer, 1000 ,'10 July 2021 ');
});