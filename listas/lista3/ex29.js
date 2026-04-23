// Solicitar preço
let preco = parseFloat(prompt("Digite o preço do livro:"));

// Calcular total com desconto
let total = preco * 0.9;

// Exibir
document.getElementById("resultado").innerHTML = "Valor total com desconto: R$ " + total.toFixed(2);

