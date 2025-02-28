let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let exchangeRateEuro = 4.14;
let exchangeRateUsd = 3.95;
let exchangeRateGbp = 5.01;
let exchangeRateChf = 4.41;

formElement.addEventListener("input", () => {

    let amount = Number(amountElement.value);
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / exchangeRateEuro;
            break;
        case "USD":
            result = amount / exchangeRateUsd;
            break;
        case "GBP":
            result = amount / exchangeRateGbp;
            break;
        case "CHF":
            result = amount / exchangeRateChf;
            break;
    }

    resultElement.innerHTML = amount <= 0 ? '<strong>Kwota musi być większa od 0 !</strong>' : `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
})