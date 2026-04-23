let seed = Date.now();
let randomNum = (seed % 100) + 1;  // Número entre 1 e 100

document.getElementById("resultado").innerHTML = "Número aleatório gerado: " + randomNum;

