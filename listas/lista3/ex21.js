let venda = parseFloat(prompt('quantos sorvetes foram vendidos'))
let preço = parseFloat(prompt('qual é o valor do sorvete'))
document.getElementById("resultado").innerHTML = `o valor arrecadado com os sorvetes foram ${venda * preço}`