let palavra = prompt('digite uma palavra')
let invertida = ''
for(let i = palavra.length - 1; i >=0 ; i--){
    invertida += palavra[i]
}console.log(invertida)
document.getElementById('resultado').innerHTML = `original${palavra} <br> invertida${invertida}`