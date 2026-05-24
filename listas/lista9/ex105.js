let palavra = prompt('digite palavra')
let vogais = ['a','e','i','o','u']
let contador = 0
let contadorvogal = 0 
for(let i = 0 ; i < palavra.length; i++){
if (vogais.includes(palavra[i])) {
    contadorvogal++
}else{
    contador++
}
}document.getElementById('resultado').innerHTML = `a palavra é ${palavra} e a quantidade de vogais é ${contador}`
