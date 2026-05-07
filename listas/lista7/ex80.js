let lista = []
let n = parseFloat(prompt('Digite um número inteiro'))
for (let i = 1; i <= n*10;i++){
    lista.push(n * i)
}   
document.getElementById('resultado').innerHTML += `<strong>esta é a tabuada desse numero ${n}<br>${lista}</strong><br>`

