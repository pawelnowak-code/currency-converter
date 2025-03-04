{

    const recalculateResult = (amount, currency) => {
        const exchangeRateEuro = 4.14;
        const exchangeRateUsd = 3.95;
        const exchangeRateGbp = 5.01;
        const exchangeRateChf = 4.41;

        switch (currency) {
            case "EUR":
                return amount / exchangeRateEuro;
            case "USD":
                return amount / exchangeRateUsd;
            case "GBP":
                return amount / exchangeRateGbp;
            case "CHF":
                return amount / exchangeRateChf;
        }
    };

    const onFormInput = () => {

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const amount = Number(amountElement.value);
        const currency = currencyElement.value;
        const result = recalculateResult(amount, currency);

        resultElement.innerHTML = amount <= 0 ? '<strong>Kwota musi być większa od 0 !</strong>' : `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);

    };

    init();
}