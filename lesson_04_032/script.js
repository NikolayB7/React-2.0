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

function shoot(arrow,headshod,fail){
    console.log('Вы сделали выстрел...');

    setTimeout(function(){
        Math.random()> 0.5 ? headshod : 
    },3000)
    
}
