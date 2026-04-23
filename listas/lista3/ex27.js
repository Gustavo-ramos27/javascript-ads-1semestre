// Solicitar X
let x = parseInt(prompt("Digite a quantidade de flores plantadas no primeiro dia (X):"));

// Calcular cada dia
let dia1 = x;
let dia2 = 2 * x;
let dia3 = 3 * x;
let dia4 = 4 * x;
let dia5 = 5 * x;

// Total
let total = dia1 + dia2 + dia3 + dia4 + dia5; // or 15 * x

// Exibir
document.getElementById("resultado").innerHTML = "Dia 1: " + dia1 + " flores<br>Dia 2: " + dia2 + " flores<br>Dia 3: " + dia3 + " flores<br>Dia 4: " + dia4 + " flores<br>Dia 5: " + dia5 + " flores<br>Total: " + total + " flores";

