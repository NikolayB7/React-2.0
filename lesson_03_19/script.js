// setTimeout(func,delay);

// let timerId = setTimeout(satHello, 3000);
// clearTimeout(timerId);

// function satHello() {
//     alert('Hello world');
// }


// let timerId = setInterval(satHello, 3000);
// clearTimeout(timerId);

// function satHello() {
//     console.log('Hello world');
// }


//Рекурсивный вызов setTimeout
// let timerId = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 2000);
// });


//Простая анимация

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


//Пример делегирования события

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (e) {
    // if (e.target && e.target.tagName == 'BUTTON') {
    //     console.log('BUTTON');
    // }


    // if (e.target && e.target.classList.contains('first')) {
    //     console.log('first');
    // }


    if (e.target && e.target.matches('button.first')) {
        console.log('button.first');
    }

});