let n1 = prompt('digite seu numero')
let n2 = prompt('digite seu numero')
let n3 = prompt('digite seu numero')
let documento = document.getElementById('resultado')
if (n1 > 0){
documento.innerHTML += `seu numero é positivo <br>`
}else if (n1 == 0){
    documento.innerHTML += `seu numero é nulo <br>`
}else if( n1 < 0){
    documento.innerHTML += `seu numero é negativo <br>`
}
if (n2 > 0){
    documento.innerHTML +=  `seu numero é positivo <br>`
}else if (n2 == 0){
    documento.innerHTML += `seu numero é nulo <br>`
}else if( n2 < 0){
    documento.innerHTML += `seu numero é negativo <br>`
}
if (n3 > 0){
documento.innerHTML += `seu numero é positivo <br>`
}else if (n3 == 0){
    documento.innerHTML += `seu numero é nulo <br>`
}else if( n3 < 0){
    documento.innerHTML += `seu numero é negativo <br>`
}