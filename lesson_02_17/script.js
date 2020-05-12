let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    firstHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.background = 'blue';


btn[1].style.borderRadius = '100%';

circle[0].style.background = 'red';
circle[1].style.background = 'yellow';
circle[2].style.background = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function (item, i, heartMass) {
//     item.style.backgroundColor = 'yellow';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Просто текстовый узел без тега');

//Класс новому элементу лучше назначать не через ClassName а через ClassList(т.к. это более новоя конструкция)

div.classList.add('black');

// document.body.appendChild(div);
// console.log(div);
// console.log(text);

// wrapper.appendChild(div);

// div.innerHTML = '<h3>Hello World</h3>';
div.textContent = 'Hello world!';

document.body.insertBefore(div, circle[0]);

document.body.removeChild(circle[1]);

document.body.replaceChild(heart[2], btn[2]);