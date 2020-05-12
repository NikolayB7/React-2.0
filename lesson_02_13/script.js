let arr = [1, 2, 3, 4, 5];

//pop() - удалить последний элемент
arr.pop();

//push() - добавить в конец массива жлемент
arr.push('7');

//shift() - удалить первый элемент
arr.shift();

//unshift() - добавить элемент в начало массива
arr.unshift('0');
console.log(arr);
//Перебор массива
// arr[12] = 15;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


let arr2 = ['first', 2, 3, 'four', 5];

arr2.forEach((item, i, mass) => {
    console.log(i + ' : ' + item + ' (массив:' + mass + ')');
});


let mass = [7, 8, 9, 10, 11, 12];

for (let key of mass) {
    console.log(key);
}

// let ans = prompt('', ''),
//     arr3 = [];

// arr3 = ans.split(',');

// console.log(arr3);


// let arr4 = ['aaaw', 'wwwq', 'pp', 'fff'],
//     i = arr4.join(', ');

// console.log(arr4);
// console.log(i);


let arr4 = [15, 7, 3, 24, 21],
    i = arr4.sort(compareNum);


function compareNum(a, b) {
    return a - b;
}

console.log(arr4);
console.log(i);