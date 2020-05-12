//touchstart
// touchmove
// touchend
//touchenter
//touchleave
//touchcancel


window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function (e) {
    //     e.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });


    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log('Red box: touchmove');
        console.log('Red box: ' + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function (e) {
    //     e.preventDefault();
    //     console.log('Red box: touchend');
    // });


    /*

Варианты записи регулярных выражений

new RegExp('pattern','flags');

или


/pattern/flags

*/

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/gi;

    // // console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    // console.log(reg.test(ans));


    // ------------------------------
    // Флаги:

    //i - флаг регистра (маленикая буква или большая)
    //g - флаг глобальности (поиск не только первого вхождения но и всех остальных)
    //m - флаг многострочности

    // Классы символов:

    // \d - поиск цифр  (не число \D)
    // \w - поиск букв (не букву \W)
    // \s - поиск пробелов (не пробел \S)

    // ------------------------------

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, '*'));

    // alert('12-34-56'.replace(/-/g, ':'));



    // let ans = prompt('Введите ваше число');

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    // let str = 'My name is R2D2';
    // console.log(str.match(/\w\d\w\d/i));

    let str = 'My name is$ R2D2';
    console.log(str.match(/\$/i));

});