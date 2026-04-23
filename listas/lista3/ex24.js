let lanche = parseFloat(prompt("Digite o valor total do lanche:"));
let economizado = parseFloat(prompt("Digite o valor que já foi economizado:"));
let falta = lanche - economizado;
document.getElementById('resultado').innerHTML = `O valor que ainda falta economizar é: R$ ${falta.toFixed(2)}`;

