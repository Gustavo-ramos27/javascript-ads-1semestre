// Solicitar o valor total
let total = parseFloat(prompt("Digite o valor total a ser dividido:"));

// Calcular x
let x = total / 7;

// Calcular para cada amigo
let amigo1 = x;
let amigo2 = 2 * x;
let amigo3 = 4 * x;

// Exibir
document.getElementById("resultado").innerHTML = "Primeiro amigo: R$ " + amigo1.toFixed(2) + "<br>Segundo amigo: R$ " + amigo2.toFixed(2) + "<br>Terceiro amigo: R$ " + amigo3.toFixed(2);

