const convertButton = document.querySelector(".convert-button")     // mapeando o botão de converter// 
const currencySelect = document.querySelector(".currency-select")



function convertValues() {                                                                  // Essa função será chamada quando clicar no botão //
    const inputCurrencyValue = document.querySelector(".input-currency").value             // mapeando o input, onde será inserido o valor //
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")   // valor em real //
    const currencyValueConverted = document.querySelector(".currency-value")             // outras moedas



    const dolarToday = 5.2
    const euroToday = 5.48                                      // Valor ficticio do dolar do dia //
    const libraToday = 6.39
    const bitcoinToday = 344.196



    //const convertedValue = inputCurrencyValue / dolarToday     -  Divisão do valor inserido pelo dólar do dia, const anulada quando inseri o if//




    if (currencySelect.value == "dolar") {                       // == (simbolo de comparação, lê-se como SE) Ex. Se esse valor por igual a esse, faça isso.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {  // Vai aparecer o valor que o usuário digitar // 
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)               // irá aparecer o valor convertido de acordo com o valor digitado pelo usuário //
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {  // Vai aparecer o valor que o usuário digitar // 
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(convertedValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)         // Função para mudar a img e texto de acordo com a moeda selecionada //
convertButton.addEventListener("click", convertValues)             // Função para "ouvir o clique do botão" //
// Toda vez que o botão for clicado a função será chamada //

