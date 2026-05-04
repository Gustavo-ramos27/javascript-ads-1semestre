let lista = []
let n = parseFloat(prompt('Digite um número inteiro'))
for (let i = 1; i <= 10; i++) {
    lista.push(n * i)
document.getElementById('resultado').innerHTML += `<strong>${lista}</strong><br>`
}
