let celsiusInput =document.querySelector('#CelToFar > input')
let fahrenheitInput = document.querySelector('#FarToCel >input')

let button1 = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number*100)/100
}
/* Celsius to Fahrenheit*/
celsiusInput.addEventListener('input',function ()
{
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) +32
    fahrenheitInput.value = roundNumber(fTemp)
})
/* Fahrenheit to Celsius */
fahrenheitInput.addEventListener('input',function ()
{
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp-32)*(5/9)
    celsiusInput.value = roundNumber(cTemp)
})

button1.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
})