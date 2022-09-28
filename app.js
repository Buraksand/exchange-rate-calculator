const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateTxt = document.getElementById('rate');
const swapBtn = document.getElementById('swap');

function calculate() {

    fetch("https://open.exchangerate-api.com/v6/latest")
        .then(res => res.json())
        .then(data => {
            let rate = data.rates[currencyEl_two.value];
            console.log(data.rates)
            console.log(currencyEl_two.value)
            console.log(data.rates[currencyEl_two.value])
            amountEl_two.value = (rate * amountEl_one.value).toFixed(2);
            rateTxt.innerHTML = `${amountEl_one.value} ${currencyEl_one.value} is equal to ${amountEl_two.value} ${currencyEl_two.value}`
        })

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    console.log(currency_one, currency_two)
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swapBtn.addEventListener('click', () => {
    console.log('swap');
    let temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();