//Promise

/*
let func1 = function(param,func2){
    func2(function(param,func3){
        func3(function(param,func4){
            func4(function(param,func5){

            })
        })
    })
}
*/
/*
let prize = 1;

function shoot(arrow, headshod, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function () {
        Math.random() > 0.5 ? headshod({}) : fail('Вы промахнулись,повторите выстрел');
    }, 3000)

};

function win(){
    console.log('Вы победили');
    (prize == 1)  ? byBear() : giveMoney();
};

function byBear(){
    console.log('Вам вручили приз');
};

function giveMoney(){
    console.log('Вам вручили денежное вознаграждение');
};

function loose(){
    console.log('Вы проиграли,повторите пытку');
};


shoot({},
    function (mark) {
        console.log('Вы попали в цель');
        win(mark,byBear,giveMoney);
    },
    function (miss) {
        console.error(miss);
        loose();
    }
);
*/


let prize = 1;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись,повторите выстрел');
        }, 3000);
    });
    return promise;
};

function win() {
    console.log('Вы победили');
    (prize == 1) ? byBear(): giveMoney();
};

function byBear() {
    console.log('Вам вручили приз');
};

function giveMoney() {
    console.log('Вам вручили денежное вознаграждение');
};

function loose() {
    console.log('Вы проиграли,повторите пытку');
};


shoot({})
    .then(mark => console.log('Вы попали в цель'))
    .then(win)
    .catch(loose)