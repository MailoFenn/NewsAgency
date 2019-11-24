$(function(){
    $.get(
        'http://data.fixer.io/api/latest',
        {'access_key': 'df3289cc5758dcc62b328833ec0b985a'},
        function(response){
            var eur = response.rates.RUB;
            var usd = (response.rates.RUB/response.rates.USD);
            var newElement = $(`<div class="currency">EUR ${eur.toFixed(2)}</div>
            <div class="currency">USD ${usd.toFixed(2)}</div>`);
            $('.money').prepend(newElement);
        }
    );
});