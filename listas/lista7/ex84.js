let numeros = []
let quadrados = 0
for (i=0 ;i<5 ;i++){
numeros.push(Math.pow(parseFloat(prompt('digite um numero')) , 2))

}
document.getElementById('resultado').innerHTML = numeros