var num = 50;

// if (num < 49) {
//     console.log('false');
// } else if (num > 100) {
//     console.log('Много');

// } else {
//     console.log('true');

// }

// (num == 50) ? console.log('true'): console.log('false');

switch (num) {
    case num < 49:
        console.log('false');
        break;

    case num > 100:
        console.log('Много');
        break;

    case num > 80:
        console.log('Много');
        break;

    case 50:
        console.log('Верно!');
        break;

    default:
        console.log('Что то пошло не так');
}