let venda = parseFloat(prompt('quantos sorvetes foram vendidos'))
let preço = parseFloat(prompt('qual é o valor do sorvete'))
document.getElementById("total").innerHTML = `o valor arrecadado com os sorvetes foram ${venda * preço}`