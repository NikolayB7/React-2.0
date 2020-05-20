window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Tab

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    info.addEventListener('click', function (e) {
        let target = e.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });



    //Timer

    let deadLine = '2020-05-30'; //приходит с сервера или от пользователя

    //узнаем разницу времени между настоящим и дедлайном
    function getTimeRemainind(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))),
            // hours = Math.floor((t/1000/60/60)%24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));


        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemainind(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total < 0) {
                clearInterval(timeInterval);
            }
        }






    }

    setClock('timer', deadLine);



    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'visible';
    })



    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failyre: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMassege = document.createElement('div');

    statusMassege.classList.add('status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        form.appendChild(statusMassege);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json;charset=utf-8');

        let formData = new FormData(form);  //Получаем все что ответил пользоатель в форме

        let obj = {};   //Создаем промежуточный обькт в который поместим все данные с формы

        //Через метод forEach помещаем все значения с формы в обьект
        formData.forEach(function(value,key){
            obj[key] = value;
        });

        //Переводим обьект в формат json
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMassege.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMassege.innerHTML = message.success;
            } else {
                statusMassege.innerHTML = message.failyre;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = ''
        }

    });

});