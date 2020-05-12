let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function () {
//     alert('You click first button');
// };

// btn[0].onclick = function () {
//     alert('You again click first button');
// };


btn[0].addEventListener('click', function (e) {
    let target = e.target;
    console.log('Произошло событие : ' + e.type + '. На элементе ' + e.target);
    // target.style.display = 'none';
    // console.log(e);

    // alert('You click first button');
});

// btn[0].addEventListener('click', function () {
//     alert('You again click first button');
// });

// btn[0].addEventListener('mouseenter', function () {
//     alert('mouse on button');
// });


wrap.addEventListener('click', function (e) {
    console.log('Произошло событие : ' + e.type + '. На элементе ' + e.target);
});

link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Произошло событие : ' + e.type + '. На элементе ' + e.target);
});

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
        console.log('Мышь за пределами элемента ' + e.target);

    })
});