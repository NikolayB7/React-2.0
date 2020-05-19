//Интерполяция

/*
let name = 'John',
    age = 25,
    mail = 'examplae@gmail.com';


    // document.write('Пользователю ' +name + ' '+ age + ' лет.Его почтовый адрес: ' + mail);

    //ES6:

    document.write(`Пользователю ${name} ${age}  лет.Его почтовый адрес: ${mail}`);
*/


// let/const

/*
function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        }
        items.push(item);
    }

    return items;
}

// makeArray();

var arr = makeArray();

arr[1]();
arr[4]();
arr[8]();
*/


//Arrow function

//Arrow function - всегда анонимна, не имеет своего контакста, внутри стрелочной функции контекст тот же что и снаружи (контекст родителя)
//Стрелочная фунция чаще всего используется в обработчиках событий, srtTimeout,setInterval, ajax
/*
let fun = () =>{
    console.log('arrow function');
    console.log(this);
}
fun()


let obj = {
    number: 5,
    sayNumber: function(){
        let say = () =>{
            console.log('say');
            console.log(this);
        }
        say();
    }
}

obj.sayNumber();

let btn = document.querySelector('button');


// btn.onclick = () =>{
//     console.log(this);
    
//     console.log('click2');
    
// }

btn.addEventListener('click',function(){
    let show = ()=>{
        console.log('show');
        console.log(this);
    }
    show();
})
*/

//Параметры по умолчанию
/*
function calcOrDouble (number,basis = 2){
    return console.log(number * basis);
}

calcOrDouble(3,4);
calcOrDouble(3);
*/

//Классы

//Используются для создания новых польхователей,элементов интерфейса, модальных окон и т.д.
/*
class Rectangle {
    constructor(width,height = 20){
        this.width = width;
        this.height = height;
    }

    calcArea(){
        return this.height * this.width;
    }
}

let quare = new Rectangle(10,10);
let quare2 = new Rectangle(10);

console.log(quare);
console.log(quare.calcArea());
console.log(quare2);
console.log(quare2.calcArea());
*/

//Spread-операторы (оператор разворота) - разворачивает массивы и превращает  в набор данных

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video,...blogs,'vk','facebook'];

    console.log(internet);


    function log(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a+b+c);
    }
let numbers = [2,5,7];
    log(...numbers);
    