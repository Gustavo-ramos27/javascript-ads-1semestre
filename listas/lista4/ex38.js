let base = parseFloat(prompt("digite o valor da base"))
let altura = parseFloat(prompt("digite o valor da altura"))
let volume = base * altura
document.getElementById('resultado').innerHTML = `o volume de seu prisma de base triangular é ${volume / 2}`