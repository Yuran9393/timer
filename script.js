//Таймер
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function countTimer(deadline) {
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
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        function updataClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timerHours.textContent < 0 || timerMinutes.textContent < 0 || timerSeconds.textContent < 0) {
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "0";
            }
            if (timerSeconds.textContent < 10) {
                timerSeconds.textContent = '0' + timerSeconds.textContent;
            } else if (timerMinutes.textContent < 10) {
                timerMinutes.textContent = '0' + timerMinutes.textContent;
            } else if (timerHours.textContent < 10) {
                timerHours.textContent = '0' + timerHours.textContent;
            }
        }
        updataClock();
    }
    setInterval(countTimer, 1000, '22 July 2021 ');
});

// Burger menu
const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        btnMenu = document.querySelector('.menu'),
        menuItem = menu.querySelectorAll('ul>li'),
        closeBtn = document.querySelector('.close-btn');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItem.forEach((elem) => {
        elem.addEventListener('click', handlerMenu);
    });
};
toggleMenu();

//МОдальное окно
const togglePopup=()=>{
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');
    const screenWidth = window.screen.width;
    let count = 0;

    let wormDown = function(){
        count++;
        
        if(screenWidth > 768){
            popupContent.style.left = count / 2 + '%';
            if(count < 80){
                setTimeout(wormDown,20);
                
            } else {
                clearTimeout(wormDown);
            }
            cancelAnimationFrame(wormDown);
            return;
    }
};
    wormDown();
          popupBtn.forEach((elem)=>{
              elem.addEventListener('click',()=>{
                  popup.style.display = 'block';
                  count=0;
                  wormDown();
              });
          });
          popupClose.addEventListener('click', ()=>{
            popup.style.display = 'none';
        });
};
togglePopup();
