// function calcular(oper) {l
//     var valor1 = document.nkt.valor1.value;
//     var valor2 = document.nkt.valor2.value;

//     if (oper == "somar") {
//         var correto = parseInt(valor1) + parseInt(valor2);
//     } else {
//         if (oper == "subtrair") {
//             var correto = valor1 - valor2;
//         } else {
//             if (oper == "multiplicar") {
//                 var correto = valor1 * valor2;
//             } else {
//                 var correto = valor1 / valor2;
//             }
//         }
//     }
//     document.nkt.correto.value = correto
// }
function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    document.getElementById('themeSwitcher').addEventListener('click', switchTheme)
}

const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(function (charKeybtn) {
    charKeybtn.addEventListener('click', function () {
        const value = charKeybtn.dataset.value
        input.value += value
    })
})
document.getElementById('clear').addEventListener('click', function () {
    input.value = ""
    input.focus()
    resultInput.value = ""
})


const calculate = () => {
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}
document.getElementById('igual').addEventListener('click', calculate)
