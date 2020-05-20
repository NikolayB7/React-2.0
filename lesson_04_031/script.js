//AJAX - Asynchronous Javascript and XML

let inpurGrn = document.getElementById('grn'),
    inpurUsd = document.getElementById('usd');

inpurGrn.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method,url,async,login,pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json;charset=utf-8');

    request.send();

    //status(404,200,403,...)
    //statusText(OK,NotFound)
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inpurUsd.value = inpurGrn.value / data.usd;

        } else {

            inpurUsd.value = 'Что-то пошло не так';

        }
    });


});