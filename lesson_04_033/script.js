//localStorage  - вмещает около  5Мб данных

//Вкладка Aplication

//Используется
//Если человек устанавливает какие-то насторойки сайта и при поавторном посещениии они должны сохранится
//Если необходимо установить данные формы
//Запомнить время где пользователь остановил показ видео и потом продолжить с этого места

/*
//Сохранить ключ
localStorage.setItem('number','1');
//Получить ключ
console.log(localStorage.getItem('number'));

//Удалить ключ
localStorage.removeItem('number');

// очистить все хранилище
localStorage.clear();
*/



window.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('exampleCheck1'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    console.log(form);


    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    if (localStorage.getItem('bg' === 'changed')) {
        form.style.backgroundColor = '#ffab00';
    }

    checkbox.addEventListener('click', function () {
        localStorage.setItem('isChecked', 'true');
    });

    change.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#ffab00';
    });

    //Для сохранения обьектов в localStorage,необходимо преобразовать их в формат JSON
    let person = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }

    let serializedPerson = JSON.stringify(person);

    localStorage.setItem('Alex', serializedPerson);

    console.log(JSON.parse(localStorage.getItem('Alex')));


});