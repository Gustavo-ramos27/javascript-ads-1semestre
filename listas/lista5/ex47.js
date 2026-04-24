let peso = prompt('digite o seu peso')
let altura = prompt('digite a sua altura')
let imc = peso / Math.pow(peso , 2)
console.log(imc.toFixed(3) * 100)
document.getElementById('resultado').innerHTML = `o seu imc é ${imc.toFixed(3) * 100}`
