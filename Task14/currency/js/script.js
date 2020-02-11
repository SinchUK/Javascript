let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {

    function currencyConvert(method, url) {
        return new Promise(function (resolve, reject) {


            const request = new XMLHttpRequest();
            request.open(method, url); //'GET', 'js/current.json'
            request.setRequestHeader('Content-type', 'application/json; charset-utf-8');
            request.send();

            request.onload = function () {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve(this.response);
                    }
                    else {
                        reject();

                    }
                } 
            };

        });

    }

    currencyConvert('GET', 'js/current.json')
        .then(response => {
            console.log(response + " req resp");
            let data = JSON.parse(response);
            console.log(data + ' JSON Parse');
            inputUsd.value = inputRub.value / data.usd;

        })
        .catch(() => {
            inputUsd.value = "Что-то пошло не так!";
            console.log("Fucking! ");
        });

});