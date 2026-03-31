let raio1 = parseFloat(prompt('raio1'))
let raio2 = parseFloat(prompt('raio2'))
let area1 = Math.PI * Math.pow(raio1 , 2)
let area2 = Math.PI * Math.pow(raio2 , 2)
let resultado = area1 - area2
console.log(resultado)
document.getElementById('resultad').innerHTML = `o resultado da area do anel é ${resultado}`