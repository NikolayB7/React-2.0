'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById('title'),
    advertising = document.getElementsByClassName('adv')[0],
    answer = document.getElementById('prompt');

let question = prompt('Ваше отношение к технике Apple');


menu.insertBefore(menuItem[2], menuItem[1]);

let item = document.createElement('li');
item.classList.add('menu-item');
item.textContent = 'Пятый пункт';
menu.appendChild(item);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

advertising.remove();

answer.innerHTML = question;