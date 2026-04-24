let raio = prompt('digite o valor do raio')
let altura = prompt('digite o valor da altura')
let area = Math.PI * Math.pow(raio , 2)
let volume = area * altura
document.getElementById('resultado').innerHTML = `o resultado do volume do cilindro é ${volume}`