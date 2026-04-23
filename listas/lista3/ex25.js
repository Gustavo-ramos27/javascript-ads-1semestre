// Solicitar a quantidade total de balas
let totalBalas = parseInt(prompt("Digite a quantidade total de balas:"));

// Solicitar o número de amigos
let numAmigos = parseInt(prompt("Digite o número de amigos:"));

// Calcular quantas balas cada amigo recebe
let cada = Math.floor(totalBalas / numAmigos);

// Exibir o resultado
document.getElementById("resultado").innerHTML = "Cada amigo receberá: " + cada + " balas";

