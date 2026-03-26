let n1 = parseFloat(prompt('digite o seu numero'))
let n2 = parseFloat(prompt('digite o seu numero'))
let n3 = parseFloat(prompt('digite o seu numero'))
let n = parseFloat(prompt('digite o seu numero'))
let pond = n1*1 + n2*2 +n3*3 + n*4 / 10
let resultado = document.getElementById('resultado')
resultado.innerHTML = `o valor da media ponderada é ${pond}`