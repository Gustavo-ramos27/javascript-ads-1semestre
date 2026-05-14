let palavra = 'gustavo'
let total = palavra.length+1
let maiuscula = palavra.toUpperCase()
console.log(total)
console.log(palavra[6])
console.log(palavra[0])
console.log(palavra.toUpperCase())
document.getElementById('resultado').innerHTML = `a palavra é ${palavra.toUpperCase()} a primeira letra é ${palavra[0].toUpperCase()} e a ultima letra é ${palavra[6].toUpperCase()} `