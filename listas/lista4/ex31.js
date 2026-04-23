let aleatorio = Math.random()
let n = Math.floor(aleatorio * 1000)
let raiz = Math.sqrt(n)
let resultado = document.getElementById('resultado')
resultado.innerHTML = `a raiz desse numero ${n} é ${raiz}`
