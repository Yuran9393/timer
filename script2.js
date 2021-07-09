'use strict';
let data = new Date(),
    days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    weekDay = new Date().getDay(),
    newYear = new Date('31 December 2021'),
    text = document.querySelector('.text');

function goodDay(){
     if(data.getHours() < 12){
         return 'Доброе утро!';
     } else if(data.getHours() > 12 && data.getHours() < 18 ){
        return'Добрый день!';
     }else if(data.getHours() > 18){
        return'Добрый вечер!';
    } else if(data.getHours() > 0 && data.getHours() < 5){
        return'Доброй ночи!';
    }
}
let dayRemaind = newYear - data;

text.innerHTML=`
${goodDay() } <br>
${'Сегодня: ' + days[weekDay].toLowerCase()}<br>
${'Текущее время: ' + data.toLocaleTimeString()}<br>
${'До Нового Года осталось ' + (Math.floor(dayRemaind / (24*60*60*1000)) + ' дней')}`;