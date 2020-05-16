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



