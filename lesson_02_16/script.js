let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    firstHeart = document.querySelector('.heart');

console.log(box);

console.log(btn);

console.log(btn[1]);

console.log(circle[2]);

console.log(heart);
console.log(heart[1]);

console.log(firstHeart);

//При выборе через querySelectorAll, становится доступен метод forEach