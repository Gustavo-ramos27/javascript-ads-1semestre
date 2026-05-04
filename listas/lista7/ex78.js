let fatorial = 1
let n = prompt('Digite um número inteiro positivo:')
while (n >= 1){
    fatorial *= n
    n--
}document.getElementById('resultado').innerHTML = `O fatorial do número é: ${fatorial}`