// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);

// }


// showFirstMessage('Hello World');

// console.log(num);

// ------------------------------------------------------

//Declaration - можно вызвать перед написанием функции

// console.log(calc(2, 3));
// console.log(calc(8, 4));

// function calc(a, b) {

//     return (a + b);
// }



// function retVar() {
//     let num = 50;
//     return num;
// }


// let anothetNum = retVar();

// console.log(anothetNum);

// --------------------------------------------------------

//Expresion - вызывается после написания функции


// let calc = function (a, b) {
//     return (a + b);
// };

// console.log(calc(2, 4));

//Стрелочные функции не имеют своего контекста (часто используютря в событиях)


let calc = (a, b) => a + b;

// console.log(calc(1, 7));

// ---------------------------------------------------------------

//Пример методов и свойств строк

let str = "Test";

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let twelve = '12.2';

console.log(Math.round(twelve));

let ten = '10.7px';

console.log(parseInt(ten));
console.log(parseFloat(ten));