let valor = parseFloat(5.3)
let resultado = document.getElementById('resultado')
resultado.innerHTML = `o valor digitado foi ${valor}<br>`
let pot = Math.pow(valor,10)
resultado.innerHTML = `o valor digitado foi ${pot}<br>`

valor = 4
let raizq = Math.sqrt(valor)
resultado.innerHTML += ` a raiz quadrada de ${valor} è ${raizq}<br>`

valor = 27
let raizc = Math.cbrt(valor)
resultado.innerHTML += ` a raiz cubica de ${valor} è ${raizc}<br>`

valor = 123
let raizset = Math.pow(valor,1/7)
resultado.innerHTML += ` a raiz de dezessete de ${valor} è ${raizset}<br>`

resultado.innerHTML += `${Math.PI} <br> `
Math.PI
console.log(Math.PI)

valor = 5.123 
let valorcima = Math.ceil(valor)
resultado.innerHTML += `o valor arrendodado para cima de ${valor} é ${valorcima} <br>`

valor = 5.993
let valorbaixo = Math.floor(valor)
resultado.innerHTML += `o valor arrendondado para baixo de ${valor} é ${valorbaixo} <br>`

valor = 5.5
let valorArred = Math.round(valor)
resultado.innerHTML += `o valor arredadondado de ${valor} é ${valorArred}<br>`

let maior = Math.max(5,10,3,-5,14,-22)
resultado.innerHTML += `o maior valor é ${maior} <br>`

let menor = Math.min(5,10,3,-5,14,-22)
resultado.innerHTML += `o menor valor é ${menor}<br>`

let aleatorio = Math.random()
resultado.innerHTML += `${Math.floor(aleatorio * 1000)}`
