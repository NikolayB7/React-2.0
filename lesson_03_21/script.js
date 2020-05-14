let box = document.querySelector('.box'),
    btn = document.querySelector('button');


    //Параметры размера документа доступны только для чтения и изменить их нельзя, за исключением scrollTop,scrollLeft

let width = box.clientWidth,
    height = box.clientHeight,
    offsetWidth = box.offsetWidth,
    offsetHeight = box.offsetHeight,
    scrollHeight = box.scrollHeight; //аналогично для ширины scrollWidth


console.log('Размеры и расположение элементов в документе');
// console.log(width);
// console.log(height);
// console.log('--------');
// console.log(offsetWidth);
// console.log(offsetHeight);
// console.log('---------');
// console.log(scrollHeight);
console.log('BoundingClientRect');
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().left);


btn.addEventListener('click',function(){
    // box.style.height = scrollHeight + 'px';
    console.log(box.scrollTop);
    box.scrollTop = 0;
});


console.log('Размеры документа');

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


//Опеределение на сколько проскролена страница, при присвоениии значения "0" страница спкролится вверх
console.log(document.documentElement.scrollTop);

scrollBy(0,200); // Сраница перемещается на 200px по оси Y при каждом выполнении функции
scrollTo(0,200); //Страница перемещается к заданой координате
