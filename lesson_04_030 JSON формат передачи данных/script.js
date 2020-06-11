// JSON (JavaScript Object Notation)
//JSON - текстовый формат обмена данными (набор пар ключ - значение)(все строки должны быть обязательно в двойных кавычках!!!)
//До появления JSON использовался XML

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font:{
        size:'16px',
        color:'#fff'
    }
};

console.log(JSON.stringify(options));

console.log(JSON.parse(JSON.stringify(options)));

