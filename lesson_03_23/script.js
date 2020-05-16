
// class User {
//     constructor(name, id) {
//         this.id = id;
//         this.human = true;
//         this.name = name;
//     }



//     hello() {
//         console.log(`Hello ${this.name}`);

//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }


// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);


// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();


// ----------------------------------------------------------

// 'use strict'

// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a+ b;
//     }
//     console.log(sum());
// }

// showThis(4,5);
// showThis(5,5);

// ----------------

// let obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         console.log(this);
//         function shout(){
//             console.log(this);
            
//         }
//         shout();    //вернется window
//     }
// }
// obj.sum();

// ------------------------------

// let user = {
//     name:'John'
// }

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user,'Smith'));
// console.log(sayName.apply(user,['Snow']));


// function count(number){
//     return this * number
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));

// ---------------------------------

let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    console.log(this);
    this.style.backgroundColor = 'green';

    function showThis(){
        console.log(this);
    }
    showThis();
    
})

//1) Протсто вызов функции - this ссылается  на window или undefined(если в режиме 'use strict' )
//2)Если функция является методом обьекта то this - это сам обьект в котором вызывается функция
//3)Конструктор(new) - this = новый созданый обьект
//4)Указание конкретного контекста через - call,apply,bind