let mesada = parseFloat(prompt('mesada total'))
let economia = parseFloat(prompt("economia"))
document.getElementById('m').innerHTML = `o valor que sobra para o gasto é ${mesada - economia}`