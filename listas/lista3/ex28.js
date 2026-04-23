// Solicitar conta
let conta = parseFloat(prompt("Digite o valor total da conta:"));

// Solicitar gorjeta %
let gorjetaPercent = parseFloat(prompt("Digite o percentual de gorjeta (%):"));

// Calcular total
let total = conta * (1 + gorjetaPercent / 100);

// Exibir
document.getElementById("resultado").innerHTML = "Valor total a ser pago: R$ " + total.toFixed(2);

